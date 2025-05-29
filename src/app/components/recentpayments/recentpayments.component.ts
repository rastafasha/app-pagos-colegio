import { Component, OnInit } from '@angular/core';
import { CommonModule, Location, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';
import { UserService } from 'src/app/services/users.service';


@Component({
  selector: 'app-recentpayments',
  standalone: false,
  templateUrl: './recentpayments.component.html',
  styleUrls: ['./recentpayments.component.css']
})
export class RecentpaymentsComponent {

  
    title = "Pagos"
  
    payments: Payment;
    error:string;
    p: number = 1;
    count: number = 8;
  
    public user;
    query: string = '';
  
  
  
    constructor(
      private location: Location,
      private paymentService: PaymentService,
      private userService: UserService,
      private http: HttpClient
    ) {
      this.user = this.userService.user;
    }
  
    ngOnInit(): void {
      this.getPagos();
      window.scrollTo(0,0);
      // this.getPagos_list();
    }
  
  
    getPagos(): void {
      this.paymentService.getRecientes().subscribe(
        (res:any) =>{
          this.payments = res.data;
          error => this.error = error
          // console.log(this.payments);
        }
      );
    }
    search() {
        return this.paymentService.search(this.query).subscribe((res: any) => {
          this.payments = res;
          if (!this.query) {
            this.ngOnInit();
          }
        });
      }
    
      public PageSize(): void {
        this.getPagos();
        this.query = '';
      }
  
}
