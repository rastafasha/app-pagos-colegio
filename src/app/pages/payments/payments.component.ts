import { Component, OnInit } from '@angular/core';
import { CommonModule, Location, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';
import { UserService } from 'src/app/services/users.service';


@Component({
  selector: 'app-payments',
  
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {


  title = "Pagos"

  payments: Payment;
  error:string;
  p: number = 1;
  count: number = 8;

  public user;




  constructor(
    private location: Location,
    private paymentService: PaymentService,
    private userService: UserService,
    private http: HttpClient
  ) {
    this.user = this.userService.user;
  }

  ngOnInit(): void {
    this.closeMenu();
    this.getPagos();
    window.scrollTo(0,0);
    // this.getPagos_list();
  }

  closeMenu(){
    var menuLateral = document.getElementsByClassName("sidebar");
      for (var i = 0; i<menuLateral.length; i++) {
         menuLateral[i].classList.remove("active");

      }
  }


  getPagos(): void {
    this.paymentService.getAll().subscribe(
      (res:any) =>{
        this.payments = res.data;
        error => this.error = error
        console.log(this.payments);
      }
    );
  }
  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }



}
