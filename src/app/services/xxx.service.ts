import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XxxService {

  constructor(private http: HttpClient) { }

  private API_PRODUCTOS= 'http://localhost:3000/xxx'

  //GET 

  getNosotros():Observable <any>{
    return this.http.get(this. API_PRODUCTOS)
  }


  getPersonal():Observable <any>{
    return this.http.get(this. API_PRODUCTOS)
  }

  getPersonalUnico(id:any): Observable <any>{
    return this.http.get(`${this.API_PRODUCTOS}/${id}`)
    
  }

}
