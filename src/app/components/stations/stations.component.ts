import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { KeyValue } from '@angular/common';

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
  stationCity: string | undefined;
  public stationLength?: number;

  constructor(public sanitizer: DomSanitizer, private stationService: StationsService) { }

  showStations() {
    this.stationService.getAllStation().subscribe((data) => {
      this.stationList = data;
      this.stationLength = this.stationList.$values.length;
    });
  }

  showStationCity(latitude: number, longitude: number) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q=" + latitude + "%20" + longitude + "&output=embed");
  }

  ngOnInit() {
    this.showStations();
  }

}
