import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StationsComponent } from "./components/stations/stations.component";
import { HerofullscreenComponent } from "./components/herofullscreen/herofullscreen.component";
import {StationsformComponent} from "./components/stationsform/stationsform.component";

const routes: Routes = [
  { path: '', component: HerofullscreenComponent},
  { path: 'stations', component: StationsComponent },
  { path: 'stationsform', component: StationsformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
