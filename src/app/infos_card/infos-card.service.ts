import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfosCardService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/infoscards';

  constructor(private http: HttpClient) { }

  getInfosCard(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createInfosCard(client: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, client);
  }

  updateInfosCard(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteInfosCard(id: number): Observable<any> {
    if(confirm("Are you sure to delete this infosCard ?")){
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
  }

  getInfosCardList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getClientsList(): Observable<any> {
    return this.http.get('http://localhost:8080/springboot-crud-rest/api/clients');
  }

  getFournisseursList(): Observable<any> {
    return this.http.get('http://localhost:8080/springboot-crud-rest/api/fournisseurs');
  }

  getScheimeList(): Observable<any> {
    return this.http.get('http://localhost:8080/springboot-crud-rest/api/scheimes/scheimesnames');
  }
}
