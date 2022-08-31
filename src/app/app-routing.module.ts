// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';
// import { MsalGuard } from '@azure/msal-angular';
// import { BrowserUtils } from '@azure/msal-browser';

// const routes: Routes = [
//   {
//     path: 'profile',
//     component: ProfileComponent,
//     canActivate: [MsalGuard]
//   },
//   {
//     path: '',
//     component: HomeComponent
//   },
// ];

// const isIframe = window !== window.parent && !window.opener;

// @NgModule({
//   imports: [RouterModule.forRoot(routes, {
//     initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled' // Don't perform initial navigation in iframes
//   })],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard]
  },
  {
    path: '',
    component: HomeComponent
  },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: !isIframe ? "enabledBlocking" : "disabled" // Don't perform initial navigation in iframes
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }