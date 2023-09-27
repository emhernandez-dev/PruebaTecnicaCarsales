import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Data } from '../interfaces/episodio.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodioService {

  constructor(private http: HttpClient) { }

  getEpisodios() {
    return this.http.get<Data>(`${environment.apiUrl}/episode`);
  }

}
