import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListahijosComponent } from './listahijos/listahijos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ckeditor4-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListapaymentsComponent } from './listapayments/listapayments.component';
import { ListapaymentshijoComponent } from './listapaymentshijo/listapaymentshijo.component';
import { SharedModule } from '../shared/shared.modulo';

@NgModule({
  declarations: [ListahijosComponent, ListapaymentsComponent, ListapaymentshijoComponent],
  exports: [ListahijosComponent, ListapaymentsComponent, ListapaymentshijoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    CKEditorModule,
    SharedModule 
  ],
})
export class ComponentsModule {}
