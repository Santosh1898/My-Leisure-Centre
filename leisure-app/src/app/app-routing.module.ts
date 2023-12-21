import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'loader', pathMatch: 'full' },
  { path: 'loader', loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule) },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'booking',
    loadChildren: () => import('./pages/booking/booking.module').then( m => m.BookingPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'active-booking',
    loadChildren: () => import('./pages/active-booking/active-booking.module').then( m => m.ActiveBookingPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-amesbury',
    loadChildren: () => import('./pages/centre-amesbury/centre-amesbury.module').then( m => m.CentreAmesburyPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-bradford',
    loadChildren: () => import('./pages/centre-bradford/centre-bradford.module').then( m => m.CentreBradfordPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-calne',
    loadChildren: () => import('./pages/centre-calne/centre-calne.module').then( m => m.CentreCalnePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-castle-place',
    loadChildren: () => import('./pages/centre-castle-place/centre-castle-place.module').then( m => m.CentreCastlePlacePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-devizes',
    loadChildren: () => import('./pages/centre-devizes/centre-devizes.module').then( m => m.CentreDevizesPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-durrington',
    loadChildren: () => import('./pages/centre-durrington/centre-durrington.module').then( m => m.CentreDurringtonPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-five',
    loadChildren: () => import('./pages/centre-five/centre-five.module').then( m => m.CentreFivePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-leighton',
    loadChildren: () => import('./pages/centre-leighton/centre-leighton.module').then( m => m.CentreLeightonPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-lime-kiln',
    loadChildren: () => import('./pages/centre-lime-kiln/centre-lime-kiln.module').then( m => m.CentreLimeKilnPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-marlborough',
    loadChildren: () => import('./pages/centre-marlborough/centre-marlborough.module').then( m => m.CentreMarlboroughPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-melksham',
    loadChildren: () => import('./pages/centre-melksham/centre-melksham.module').then( m => m.CentreMelkshamPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-nadder',
    loadChildren: () => import('./pages/centre-nadder/centre-nadder.module').then( m => m.CentreNadderPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-olympiad',
    loadChildren: () => import('./pages/centre-olympiad/centre-olympiad.module').then( m => m.CentreOlympiadPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-springfield',
    loadChildren: () => import('./pages/centre-springfield/centre-springfield.module').then( m => m.CentreSpringfieldPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-activity-zone',
    loadChildren: () => import('./pages/centre-activity-zone/centre-activity-zone.module').then( m => m.CentreActivityZonePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-vale',
    loadChildren: () => import('./pages/centre-vale/centre-vale.module').then( m => m.CentreValePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-tidworth',
    loadChildren: () => import('./pages/centre-tidworth/centre-tidworth.module').then( m => m.CentreTidworthPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-trowbridge',
    loadChildren: () => import('./pages/centre-trowbridge/centre-trowbridge.module').then( m => m.CentreTrowbridgePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-warminster',
    loadChildren: () => import('./pages/centre-warminster/centre-warminster.module').then( m => m.CentreWarminsterPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'centre-westbury',
    loadChildren: () => import('./pages/centre-westbury/centre-westbury.module').then( m => m.CentreWestburyPageModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

