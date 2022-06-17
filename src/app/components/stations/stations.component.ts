import { Component, OnInit } from '@angular/core';
import { Station } from "../../interfaces/station";
import { StationsService } from "../../services/stations/stations.service";

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {

  heroBackground:any = "../assets/images/hero-stations-desktop.jpg";

  stationList?: Station[];

  constructor(private stationService: StationsService) { }

  showStations() {
    this.stationService.getAllStation().subscribe((data) => {
      //console.log(Object.entries(data)[1]);
      console.log(data);
      this.stationList = data
    });
  }

  ngOnInit() {
    this.showStations();
  }

}
