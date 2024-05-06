import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Assurez-vous que vous avez importé le modèle approprié
import { AspectItem } from '../model/AspectItem';
@Injectable({
  providedIn: 'root'
})

export class AprioriService {
  constructor(private http: HttpClient) {}

  getAprioriData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5000/get_aprioris');
  }
  getAspect(): Observable<AspectItem[]> {
    return this.http.get<AspectItem[]>('http://localhost:5000/api/aspect').pipe(
      map((data: any) => {
        // Si data est une chaîne JSON, la convertir en objet JavaScript
        if (typeof data === 'string') {
          data = JSON.parse(data);
        }
        return data;
      })
    );
  }
  getTerrainsData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5000/terrain');
  }
}
