import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Station } from '../../interfaces/station';
import { rootStation } from "../../interfaces/rootStation";

@Injectable({
  providedIn: 'root'
})

export class StationsService {

  private station_api_url: string = 'http://ip24.ip-51-161-69.net/api/Station'

  constructor(private httpClient: HttpClient) { }

  getAllStation() : Observable<rootStation> {
    return this.httpClient.get<rootStation>(this.station_api_url);
  }
}
