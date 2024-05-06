
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  constructor(private http: HttpClient) {}

  Prediction(data: any) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:5000/prediction', data, { headers: headers });
  }
}

