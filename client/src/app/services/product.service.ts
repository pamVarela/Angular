import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  create(data): Observable<any>{ 
    return this.http.post(baseUrl + '/add', data);
  }

  getAll(): Observable<any> {
    return this.http.get(baseUrl + '/getAll');
  }

  getAllByNameAndId(): Observable<any> {
    return this.http.get(baseUrl + '/getAllByNameAndId');
  }

  update(id, data):  Observable<any> { 
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id):  Observable<any> { 
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
