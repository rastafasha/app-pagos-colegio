import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ckeditor4-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentEditComponent } from './payment-edit/payment-edit.component';
import { PaymentsComponent } from './payments.component';



@NgModule({
  declarations: [
    PaymentDetailsComponent,
    PaymentEditComponent,
    PaymentsComponent
  ],
  imports: [
    CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        BrowserAnimationsModule,
        NgxPaginationModule,
        CKEditorModule
  ]
})
export class PaymentsModule { }
