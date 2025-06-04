import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dashboard } from 'src/app/models/dashboard';
import { Parent } from 'src/app/models/parents';
import { AccountService } from 'src/app/services/account.service';
import { DashboardService } from 'src/app/services/dashboard.service';


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
  total_parents:Dashboard;
  parents_nodeuda:Dashboard
  total_parents_deuda:Dashboard
  total_students:Dashboard

  constructor(
    private dashboardService: DashboardService,
    public accountService:AccountService
    ) {}

  ngOnInit() {

    window.scrollTo(0, 0);

    let USER = localStorage.getItem("user");
    this.user = JSON.parse(USER ? USER: '');
    this.role = this.user.roles[0];
    this.accountService.closeMenu();
    this.getDashboardData();

  }
  getDashboardData(){
    this.dashboardService.getDasboardConfig().subscribe((resp:any)=>{
      // console.log(resp);
      this.total_parents = resp.total_parents;
      this.parents_nodeuda = resp.parents_nodeuda;
      this.total_parents_deuda = resp.total_parents_deuda;
      this.total_students = resp.total_students;
    })
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
