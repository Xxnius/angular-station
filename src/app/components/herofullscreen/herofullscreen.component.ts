import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herofullscreen',
  templateUrl: './herofullscreen.component.html',
  styleUrls: ['./herofullscreen.component.scss']
})
export class HerofullscreenComponent implements OnInit {

  constructor() { }

  heroBackground:any = "../assets/images/hero-desktop.jpg";

  ngOnInit(): void {
  }

}
