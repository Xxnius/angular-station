import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stationsform',
  templateUrl: './stationsform.component.html',
  styleUrls: ['./stationsform.component.scss']
})
export class StationsformComponent implements OnInit {

  heroBackground:any = "../assets/images/hero-stationsform-desktop.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
