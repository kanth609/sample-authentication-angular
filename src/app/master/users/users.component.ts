import { ChangeDetectorRef, Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  usersData: any[] = [];
  displayedColumns = ['id', 'name', 'email', 'address'];
  totalUsers: number = 0;
  pageSize: number = 0;
  dataSource = new MatTableDataSource(this.usersData);
  

  constructor(private http: HttpService, private cd: ChangeDetectorRef) {  }

  ngOnInit(){
    this.getUserData(5);
  }
  
  getUserData(page:any){
    this.http.get("https://randomuser.me/api/?results="+page).then((res :any) => {
      if(res && Array.isArray(res.results)){
        this.usersData = [];
        res.results.forEach((user :any) => {
          let userObj = {
            name: user['name']['first'] + ' ' + user['name']['last'],
            id: user['id']['value'],
            email: user['email'],
            address: user['location']['timezone']['description']
          }
          this.usersData.push(userObj);
        });
        this.totalUsers = res.info.results;
        this.dataSource.data = this.usersData;
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handlePageEvent(page: PageEvent){
    this.getUserData(page.pageSize)
  }
}
