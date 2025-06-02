import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Parent } from 'src/app/models/parents';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  error: string;

  user: any;
  parentprofile:Parent;
  role:any;
  query:string ='';

  constructor(
    private ativatedRoute: ActivatedRoute,
    public accountService:AccountService
    ) {}

  ngOnInit() {

    window.scrollTo(0, 0);

    let USER = localStorage.getItem("user");
    this.user = JSON.parse(USER ? USER: '');
    this.role = this.user.roles[0];
    this.accountService.closeMenu();

  }


  public PageSize(): void {
      // this.getDirectorios();
      this.query = '';
    }
  
  
    search() {
      // return this.directorioService.search(this.query).subscribe(
      //   (res:any)=>{
      //     this.directories = res;
      //     if(!this.query){
      //       this.ngOnInit();
      //     }
      //   });
    }


}
