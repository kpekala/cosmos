import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from 'rxjs'
import { environment } from "src/environments";
import { NearEarthObject } from "./neo.model";

@Injectable({providedIn: 'root'})
export class NeoService {
  constructor(private http: HttpClient) {}

  fetchAsteroids(startDate: string, endDate: string): Observable<NearEarthObject[]> {
    const apiKey = environment.nasaApiKey;
    const params = new HttpParams()
      .set('api_key', apiKey) 
      .set('start_date', startDate)
      .set('end_date', endDate);

    return this.http.get('https://api.nasa.gov/neo/rest/v1/feed',{params: params})
      .pipe(map(data => this.parseAsteroidsData(data)));
  }

  parseAsteroidsData(data): NearEarthObject[]{
    console.log(data);
    let neos = [];
    let objectsMap = data['near_earth_objects'];
    Object.keys(objectsMap).forEach(dateKey => {
      let objectsOfDay = objectsMap[dateKey];
      objectsOfDay.forEach(obj => {
        let diameter = obj.estimated_diameter.meters.estimated_diameter_min;
        diameter = Math.round(diameter * 100) / 100;
        let magnitude = Math.round(obj.absolute_magnitude_h * 100) / 100; 
        neos.push(new NearEarthObject(dateKey, obj.name, magnitude, diameter));
      })
    })
    return neos;
  }
}