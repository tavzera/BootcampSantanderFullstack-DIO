import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListProductService {
  private apiUrl = 'https://sheet.best/api/sheets/6282008b-028d-423f-bc86-faa05fa286fc';
  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getListProduct(){
    return this.http.get(this.apiUrl);
  }
}
