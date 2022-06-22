import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from "@angular/router";

import { Station } from "../../interfaces/station";
import { rootStation } from "../../interfaces/rootStation";
import { StationsService } from "../../services/stations/stations.service";

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {

  heroBackground:any = "../assets/images/hero-station-desktop.jpg";

  station?:Station;
  id?: string;

  constructor(public sanitizer: DomSanitizer, private stationService: StationsService, private router: Router) {}

  showStation() {
    this.stationService.getAllStation().subscribe((data) => {
      for(let elt of data.$values) {
        if(elt.id === this.id) {
          this.station = elt;
          break;
        }
      }
    });
  }

  showStationCity(latitude: number, longitude: number) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q=" + latitude + "%20" + longitude + "&output=embed");
  }

  ngOnInit(): void {
    this.id = this.router.url.substring(9);
    this.showStation();
  }

}
