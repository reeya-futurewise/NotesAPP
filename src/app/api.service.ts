import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private baseUrl = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { 
  }

    // get(endpoint: string) {
    //   return this.http.get(`${this.baseUrl}/${endpoint}`);
    // }
    // post(endpoint: string, data: any) {
    //   return this.http.post(`${this.baseUrl}/${endpoint}`, data);
    // }
}
