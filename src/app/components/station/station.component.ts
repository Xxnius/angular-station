import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {

  heroBackground:any = "../assets/images/hero-station-desktop.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
