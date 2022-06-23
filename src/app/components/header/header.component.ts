import { Component, Input, OnInit } from '@angular/core';
import { StationsService } from "../../services/stations/stations.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  stationsLength?: number;

  constructor(private stationsService: StationsService) {}

  ngOnInit(): void {
    this.stationsService.getAllStation().subscribe((data) => {
      this.stationsLength = data['$values'].length;
    })
  }

}
