import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StationsComponent } from "./components/stations/stations.component";
import { HerofullscreenComponent } from "./components/herofullscreen/herofullscreen.component";
import {StationsformComponent} from "./components/stationsform/stationsform.component";
import {StationComponent} from "./components/station/station.component";

const routes: Routes = [
  { path: '', component: HerofullscreenComponent},
  { path: 'stations', component: StationsComponent },
  { path: 'station', component: StationComponent },
  { path: 'stationsform', component: StationsformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
