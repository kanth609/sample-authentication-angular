import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  public showLoader = false;

  JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNTM0NTQzNTQzNTQzNTM0NTMiLCJleHAiOjE1MDQ2OTkyNTZ9.zG-2FvGegujxoLWwIQfNB5IT46D-xC4e8dEDYwi6aRM";

  constructor(public snackbar: MatSnackBar) { }

  saveDataInSessionStorage(key:string, value: any){
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getDataFromSessionStorage(key:string){
    let returnVal = sessionStorage.getItem(key);
    return returnVal ? JSON.parse(returnVal) : returnVal;
  }

  showSnackBar(message: string, type: "success-snackbar"|"error-snackbar"|"warning-snackbar"){
    this.snackbar.open(message, "X", {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: "bottom",
      panelClass: [type]
    })
  }
}
