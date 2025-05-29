import { Component, OnInit } from '@angular/core';

import { HttpBackend, HttpClient, HttpHandler } from '@angular/common/http';

import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
import { ParentService } from 'src/app/services/parent-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  title = "Padres";
  
    loading = false;
    usersCount = 0;
    parents: any;
    user: any;
    roles;
  
    p: number = 1;
    count: number = 8;
  
    error: string;
    selectedValue!: any;
    msm_error: string;
    query:string ='';
  
    ServerUrl = environment.url_servicios;
    doctores;
    // role:any;
  
    constructor(
      private parentService: ParentService,
      private location: Location,
      private http: HttpClient,
      handler: HttpBackend
      ) {
        this.http = new HttpClient(handler);
      }
  
    ngOnInit(): void {
      window.scrollTo(0,0);
      this.closeMenu();
      this.getUsers();
    }
  
  
  
  
    getUsers(): void {
      this.parentService.getAll().subscribe(
        (res:any) =>{
          this.parents = res.representantes;
          error => this.error = error;
          // console.log(this.parents);
        }
      );
    }
  
  
  
    cambiarRole(data:any){debugger
      let VALUE = {
        id: data.id,
        roles:data.roles.name
      };
      // console.log(VALUE);
      
      // this.userService.update(data).subscribe(
      //   resp =>{
      //     // console.log(resp);
      //     Swal.fire('Updated', `Client Status Updated successfully!`, 'success');
      //   }
      // )
    }
  
  
  
  
    eliminarUser(user:User){
      this.parentService.deleteById(user).subscribe(
        response =>{
          this.getUsers();
        },
        error=>{
          this.msm_error = 'No se pudo eliminar el curso, vuelva a intentar.'
        }
        );
        this.ngOnInit();
    }
  
    goBack() {
      this.location.back(); // <-- go back to previous location on cancel
    }
  
    closeMenu(){
      var menuLateral = document.getElementsByClassName("sidebar");
        for (var i = 0; i<menuLateral.length; i++) {
           menuLateral[i].classList.remove("active");
  
        }
    }
  
    search() {
      return this.parentService.search(this.query).subscribe(
        (res:any)=>{
          console.log(res);
          this.parents = res;
          if(!this.query){
            this.ngOnInit();
          }
        });
    }
  
    public PageSize(): void {
      this.getUsers();
      this.query = '';
    }
}
