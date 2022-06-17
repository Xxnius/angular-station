import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StationsComponent } from "./components/stations/stations.component";
import { HerofullscreenComponent } from "./components/herofullscreen/herofullscreen.component";

const routes: Routes = [
  { path: '', component: HerofullscreenComponent},
  { path: 'stations', component: StationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
