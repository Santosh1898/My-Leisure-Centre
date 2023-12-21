import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Import AngularFirestore
import { Observable } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  //for centre-amesbury
  getActivitiesAmesbury(): Observable<any[]> {
    return this.firestore.collection('activities_amesbury',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    );
  }
  getTimeSlotsForAmesbury(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_amesbury')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-bradford
  getActivitiesBradford(): Observable<any[]> {
    return this.firestore.collection('activities_bradford',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    );
  }
  getTimeSlotsForBradford(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_bradford')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-calne
  getActivitiesCalne(): Observable<any[]> {
    return this.firestore.collection('activities-calne',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    ); 
  }
  getTimeSlotsForCalne(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities-calne')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-castle-place
  getActivitiesCastlePlace(): Observable<any[]> {
    return this.firestore.collection('activities_castle-place',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    ); 
  }
  getTimeSlotsForCastlePlace(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_castle-place')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-devizes
  getActivitiesDevizes(): Observable<any[]> {
    return this.firestore.collection('activities_devizes',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    ); 
  }
  getTimeSlotsForDevizes(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_devizes')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-durrington
  getActivitiesDurrington(): Observable<any[]> {
    return this.firestore.collection('activities_durrington',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    );
  }
  getTimeSlotsForDurrington(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_durrington')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-five rivers
  getActivitiesFive(): Observable<any[]> {
    return this.firestore.collection('activities_five',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    ); 
  }
  getTimeSlotsForFive(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_five')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-leighton
  getActivitiesLeighton(): Observable<any[]> {
    return this.firestore.collection('activities_leighton',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    ); 
  }
  getTimeSlotsForLeighton(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_leighton')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-lime-kiln
  getActivitieslimeKiln(): Observable<any[]> {
    return this.firestore.collection('activities_lime-kiln',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    ); 
  }
  getTimeSlotsForlimeKiln(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_lime-kiln')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-marlborough
  getActivitiesMarlborough(): Observable<any[]> {
    return this.firestore.collection('activities_marlborough',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    ); 
  }
  getTimeSlotsForMarlborough(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_marlborough')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-melksham
  getActivitiesMelksham(): Observable<any[]> {
    return this.firestore.collection('activities_melksham',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    ); 
  }
  getTimeSlotsForMelksham(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_melksham')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-Nadder
  getActivitiesNadder(): Observable<any[]> {
    return this.firestore.collection('activities_nadder',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    );
  }
  getTimeSlotsForNadder(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_nadder')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-Olympiad
  getActivitiesOlympiad(): Observable<any[]> {
    return this.firestore.collection('activities_olympiad',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    ); 
  }
  getTimeSlotsForOlympiad(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_olympiad')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-Springfield
  getActivitiesSpringfield(): Observable<any[]> {
    return this.firestore.collection('activities_springfield',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    ); 
  }
  getTimeSlotsForSpringfield(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_springfield')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-Activity-zone
  getActivitiesactivityZone(): Observable<any[]> {
    return this.firestore.collection('activities_activity-zone',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    );
  }
  getTimeSlotsForactivityZone(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_activity-zone')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-Vale
  getActivitiesVale(): Observable<any[]> {
    return this.firestore.collection('activities_vale',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    );
  }
  getTimeSlotsForVale(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_vale')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-Tidworth
  getActivitiesTidworth(): Observable<any[]> {
    return this.firestore.collection('activities_tidworth',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    );
  }
  getTimeSlotsForTidworth(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_tidworth')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-Trowbridge
  getActivitiesTrowbridge(): Observable<any[]> {
    return this.firestore.collection('activities_trowbridge',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    );
  }
  getTimeSlotsForTrowbridge(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_trowbridge')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-Warminster
  getActivitiesWarminster(): Observable<any[]> {
    return this.firestore.collection('activities_warminster',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    );
  }
  getTimeSlotsForWarminster(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_warminster')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }

  //for centre-Westbury
  getActivitiesWestbury(): Observable<any[]> {
    return this.firestore.collection('activities_westbury',).valueChanges().pipe(
      map((data: any) => {
        return data as any[];
      })
    );
  }
  getTimeSlotsForWestbury(activityId: string, day: string): Observable<any[]> {
    return this.firestore
      .collection('activities_westbury')
      .doc(activityId)
      .collection('timeSlots') // subcollection name
      .doc(day)
      .valueChanges()
      .pipe(
        map((data: any) => {
          return data as any[];
        })
      );
  }
  // other Firestore operations can be added here
}
