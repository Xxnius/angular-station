import { Component, OnInit } from '@angular/core';
import { Station } from "../../interfaces/station";
import { StationsService } from "../../services/stations/stations.service";
import { rootStation } from "../../interfaces/rootStation";

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {

  heroBackground:any = "../assets/images/hero-stations-desktop.jpg";

  stationList: rootStation = {} as any;

  constructor(private stationService: StationsService) { }

  showStations() {
    this.stationService.getAllStation().subscribe((data) => {
      this.stationList = data
    });
  }

  ngOnInit() {
    this.showStations();
  }

}
