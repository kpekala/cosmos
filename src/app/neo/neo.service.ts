import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs'
import { environment } from "src/environments";

@Injectable({providedIn: 'root'})
export class NeoService {
  constructor(private http: HttpClient) {}

  fetchAsteroids(startDate: string, endDate: string): Observable<any> {
    const apiKey = environment.nasaApiKey;
    const params = new HttpParams()
      .set('api_key', apiKey) 
      .set('start_date', startDate)
      .set('end_date', endDate);

    return this.http.get('https://api.nasa.gov/neo/rest/v1/feed',{params: params});
  }
}