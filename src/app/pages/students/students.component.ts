import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Payment } from 'src/app/models/payment';
import { User } from 'src/app/models/users';
import { AccountService } from 'src/app/services/account.service';
import { ParentService } from 'src/app/services/parent-service.service';
import { environment } from 'src/environments/environment';
import { StudentService } from 'src/app/services/student-service.service';
@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  title = "Estudiantes";
    
      loading = false;
      usersCount = 0;
      students: any;
      user: any;
      roles;
      isLoading:boolean=false;
    
      p: number = 1;
      count: number = 8;
    
      error: string;
      selectedValue!: any;
      msm_error: string;
      query:string ='';
      payments:Payment;
    
      ServerUrl = environment.url_servicios;
      doctores;
      // role:any;
    
      constructor(
        private studentService: StudentService,
        private location: Location,
        private http: HttpClient,
        public accountService: AccountService,
        handler: HttpBackend
        ) {
          this.http = new HttpClient(handler);
        }
    
      ngOnInit(): void {
        window.scrollTo(0,0);
        this.accountService.closeMenu();
        this.getUsers();
      }
    
    
      getUsers(): void {
        this.isLoading = true;
        this.studentService.getAll().subscribe(
          (res:any) =>{
            this.students = res.students.data;
            error => this.error = error;
            this.isLoading = false;
            // console.log(this.students);
          }
        );
      }
    
    
      
      goBack() {
        this.location.back(); // <-- go back to previous location on cancel
      }
    
      search() {
        return this.studentService.search(this.query).subscribe(
          (res:any)=>{
            console.log(res);
            this.students = res;
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
