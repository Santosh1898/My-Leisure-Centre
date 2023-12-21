import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centre-bradford',
  templateUrl: './centre-bradford.page.html',
  styleUrls: ['./centre-bradford.page.scss'],
})
export class CentreBradfordPage implements OnInit {
  selectedDate: { [key: string]: Date } = {}; 
  selectedDay: { [key: string]: string } = {};
  selectedTime: { [key: string]: string } = {};
  timeSlots: any[] = [];
  dateList: Date[] = [];
  activities_bradford: any[] = [];

// Transfering to Payment page
  centreName: string = '';
  selectedActivityName: string = '';
  
  selectedActivityTimeSlot: string = '';
  selectedActivityCost: string = '';

  storedSelectedDate: Date | undefined;


  constructor(
    private firestoreService: FirestoreService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.firestoreService.getActivitiesBradford().subscribe(
      (data: any) => {
        this.activities_bradford = data;
        console.log('Activity:', this.activities_bradford);

        // Initialize selectedDate for each activity
        for (const activity of this.activities_bradford) {
          this.selectedDate[activity.id] = this.dateList[0];
        }

        this.updateDayAndTimeSlots();
      },
      (error: any) => {
        console.error('Error fetching activities:', error);
      }
    );

    this.populateDateList();
  }

  populateDateList() {
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      this.dateList.push(nextDay);
    }
  }

  // Method to check if a date is selected
  isSelectedDate(date: Date, activityId: string): boolean {
    return this.selectedDate[activityId]?.toDateString() === date.toDateString();
  }

  selectDate(date: Date, activity: any) {
    this.selectedDate[activity.id] = date;
    this.selectedDay[activity.id] = this.getDayFromDate(date);

    //Parameters transfering to payment page
    this.selectedActivityName = activity.title;
    
    this.selectedActivityCost = activity.cost;
    
    this.storedSelectedDate = date;//storing the selected date for payment page
   

    this.firestoreService
      .getTimeSlotsForBradford(activity.id, this.selectedDay[activity.id])
      .subscribe(
        (timeSlotsData) => {
          if (timeSlotsData) {
            const index = this.activities_bradford.findIndex(
              (item) => item.id === activity.id
            );
            if (index !== -1) {
              const timeSlots = Object.values(timeSlotsData);
            // Sorting the time slots in ascending order
            this.activities_bradford[index].timeSlots = timeSlots.sort();
            }
          } else {
            const index = this.activities_bradford.findIndex(
              (item) => item.id === activity.id
            );
            if (index !== -1) {
              this.activities_bradford[index].timeSlots = [];
            }
          }
        },
        (error) => {
          console.error('Error fetching time slots:', error);
        }
      );
  }
  

  updateDayAndTimeSlots() {
    for (const activity of this.activities_bradford) {
      const selectedDate = this.selectedDate[activity.id];
      this.selectedDay[activity.id] = selectedDate ? this.getDayFromDate(selectedDate) : '';
      activity.timeSlots = [];
    }
    this.timeSlots = []; // Reset the time slots when the day is updated
  }

  getDayFromDate(date: Date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }

  bookNow() {
    if (!this.storedSelectedDate || !this.selectedActivityTimeSlot) {
      // Display an error message here or prevent navigation to the payment page
      console.error("Please select activity, date, and timeslot to book.");
      // Example error message display using an alert
      alert("Please select activity, date, and timeslot to book.");
    } else {
      this.router.navigate(['payment'], {
        // Parameters transferring to the payment page
        queryParams: {
          centreName: "Bradford-on-Avon Pool",
          activityName: this.selectedActivityName,
          selectedDate: this.storedSelectedDate,
          timeSlot: this.selectedActivityTimeSlot,
          cost: this.selectedActivityCost,
        },
      });
    }
  }

  resetSelection() {
    this.selectedDate = {};
    this.selectedDay = {};
    this.selectedTime = {};
  }
  
}

