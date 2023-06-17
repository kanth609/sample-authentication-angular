import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private helper: HelperService) { }

  
  get(url: string, options? :any){
    return new Promise((resolve, reject) => {
      this.helper.showLoader = true;
      this.http.get(url, options).subscribe(res => {
        if(res) resolve(res);
        else reject(false)
      },
      (err) => {
        reject(false);
        console.log(err)
      },
      () => {
        this.helper.showLoader = false;
      })
    })
  }
}
