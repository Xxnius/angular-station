import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Station } from '../../interfaces/station';

@Injectable({
  providedIn: 'root'
})

export class StationsService {

  private station_api_url: string = 'http://ip24.ip-51-161-69.net/api/Station'

  constructor(private httpClient: HttpClient) { }

  getAllStation() : Observable<Station[]> {
    return this.httpClient.get<Station[]>(this.station_api_url);
  }
}
