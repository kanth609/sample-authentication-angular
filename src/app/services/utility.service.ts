import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNTM0NTQzNTQzNTQzNTM0NTMiLCJleHAiOjE1MDQ2OTkyNTZ9.zG-2FvGegujxoLWwIQfNB5IT46D-xC4e8dEDYwi6aRM";

  constructor() { }

  saveDataInSessionStorage(key:string, value: any){
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getDataFromSessionStorage(key:string){
    let returnVal = sessionStorage.getItem(key);
    return returnVal ? JSON.parse(returnVal) : returnVal;
  }
}
