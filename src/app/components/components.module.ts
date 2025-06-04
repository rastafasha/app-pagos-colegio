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
import { SharedModule } from '../shared/shared.module';
import { RecentpaymentsComponent } from './recentpayments/recentpayments.component';
import { TasadiabcvComponent } from './tasadiabcv/tasadiabcv.component';
import { StatuspagosComponent } from './statuspagos/statuspagos.component';
import { PipesModule } from '../pipes/pipes.module';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { CalificacionesEditComponent } from './calificaciones-edit/calificaciones-edit.component';
import { ExamenesStudentComponent } from './examenes-student/examenes-student.component';

@NgModule({
  declarations: [ListahijosComponent, ListapaymentsComponent, ListapaymentshijoComponent, 
    RecentpaymentsComponent, TasadiabcvComponent,StatuspagosComponent, CalificacionesComponent, 
    CalificacionesEditComponent, ExamenesStudentComponent ],
  exports: [ListahijosComponent, ListapaymentsComponent, ListapaymentshijoComponent,
    RecentpaymentsComponent, TasadiabcvComponent,StatuspagosComponent, CalificacionesComponent,
    CalificacionesEditComponent  , ExamenesStudentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    CKEditorModule,
    SharedModule,
    PipesModule
  ],
})
export class ComponentsModule {}
