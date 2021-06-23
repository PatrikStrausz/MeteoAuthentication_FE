import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {Station} from '../models/station';

@Injectable({
  providedIn: 'root'
})
export class StationsService {
  readonly APIUrl = 'http://localhost:4200/api/stations';
  public currentUser: Observable<User>;

  constructor(private httpService: HttpClient) {
  }

  getUserStations(): Observable<Station[]> {
    return this.httpService.get<Station[]>(this.APIUrl + '/byUser');
  }

  addUserStations(station: { title: string; destination: string; model_description: string; phone: string }): Observable<Station[]> {
    return this.httpService.post<Station[]>(this.APIUrl + '/add', {
      title: station.title,
      destination: station.destination,
      model_description: station.model_description,
      phone: station.phone
    });
  }
}

