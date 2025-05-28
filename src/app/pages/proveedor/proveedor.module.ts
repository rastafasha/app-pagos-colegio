import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProveedorComponent } from './edit-proveedor/edit-proveedor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ckeditor4-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListProveedorComponent } from './list-proveedor/list-proveedor.component';
import { DetailProveedorComponent } from './detail-proveedor/detail-proveedor.component';



@NgModule({
  declarations: [
    EditProveedorComponent,
    ListProveedorComponent,
    DetailProveedorComponent
  ],
  exports: [
    EditProveedorComponent,
    ListProveedorComponent,
    DetailProveedorComponent
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
export class ProveedorModule { }
