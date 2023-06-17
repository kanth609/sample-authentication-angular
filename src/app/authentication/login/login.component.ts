import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFields = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private route: Router, private utility: HelperService) {
    this.loginFields.setValue({
      mail: "mail@mail.com",
      password: "adsasdasd"
    })
  }

  ngOnInit(){
    this.utility.saveDataInSessionStorage('jwt', "");
  }

  onSubmitLoginForm(){
    if(this.loginFields.valid){
      this.utility.saveDataInSessionStorage('jwt', this.utility.JWT_TOKEN)
      this.route.navigate(['master/home']);
    }
  }

}
