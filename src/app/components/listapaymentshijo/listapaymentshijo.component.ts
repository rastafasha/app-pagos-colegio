import { HttpClient, HttpBackend } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Parent } from 'src/app/models/parents';
import { Payment } from 'src/app/models/payment';
import { Student } from 'src/app/models/student';
import { User } from 'src/app/models/users';
import { ParentService } from 'src/app/services/parent-service.service';
import { StudentService } from 'src/app/services/student-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listapaymentshijo',
  templateUrl: './listapaymentshijo.component.html',
  styleUrls: ['./listapaymentshijo.component.css']
})
export class ListapaymentshijoComponent {
   @Input() studentprofile: Student;
    
      title = 'Padres';
    
      loading = false;
      usersCount = 0;
      students: Student;
      payments: Payment;
    
      p: number = 1;
      count: number = 8;
      isLoading = false;
      error: string;
      selectedValue!: any;
      msm_error: string;
      query: string = '';
    
      ServerUrl = environment.url_servicios;
    
      constructor(
        private parentService: ParentService,
        private studentService: StudentService,
        private http: HttpClient,
        handler: HttpBackend
      ) {
        this.http = new HttpClient(handler);
      }
    
      ngOnInit(): void {
        window.scrollTo(0, 0);
        this.studentprofile;
        this.getPaymentsbyStudent();
      }
    
      getPaymentsbyStudent(){
        this.isLoading = true;
        this.studentService.getPaymentById(this.studentprofile.id).subscribe((resp:any)=>{
          this.payments = resp;
          this.isLoading = false;
          // console.log(this.payments);
        })
      }
    
      search() {
        return this.studentService.search(this.query).subscribe((res: any) => {
          // console.log(res);
          this.students = res;
          if (!this.query) {
            this.ngOnInit();
          }
        });
      }
    
      public PageSize(): void {
        this.getPaymentsbyStudent();
        this.query = '';
      }
}
