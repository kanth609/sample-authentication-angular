import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  constructor(private helper: HelperService, private route: Router) {}

  onLogout(){
    this.helper.saveDataInSessionStorage('jwt', '');
    this.route.navigate(['login'])
  }
}
