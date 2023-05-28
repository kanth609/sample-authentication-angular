import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';

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

  constructor(private route: Router, private utility: UtilityService) {
    
  }

  ngOnInit(){
    this.utility.saveDataInSessionStorage('jwt', "");
  }

  onSubmitLoginForm(){
    if(this.loginFields.valid){
      this.utility.saveDataInSessionStorage('jwt', this.utility.JWT_TOKEN)
      this.route.navigate(['master']);
    }
  }

}
