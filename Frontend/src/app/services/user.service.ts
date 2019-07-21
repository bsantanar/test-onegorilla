import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private valuesUrl = 'http://localhost:3000/values'

  constructor( private http: HttpClient ) { }

  public getValues(){
    return this.http.get(this.valuesUrl);
  }

  public newValue(value){
    return this.http.post(this.valuesUrl, value);
  }
}
