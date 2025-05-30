import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { SliderEditComponent } from './slider/slider-edit/slider-edit.component';
import { SliderIndexComponent } from './slider/slider-index/slider-index.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UsersListComponent } from './users/user-list/users-list.component';
import { EditProveedorComponent } from './proveedor/edit-proveedor/edit-proveedor.component';
import { DetailProveedorComponent } from './proveedor/detail-proveedor/detail-proveedor.component';
import { ListProveedorComponent } from './proveedor/list-proveedor/list-proveedor.component';
import { PaymentEditComponent } from './payments/payment-edit/payment-edit.component';
import { PaymentDetailsComponent } from './payments/payment-details/payment-details.component';
import { Payment } from '../models/payment';
import { PaymentsComponent } from './payments/payments.component';
import { ListComponent } from './parents/list/list.component';
import { DetailparentComponent } from './parents/detailparent/detailparent.component';
import { ConfigComponent } from './config/config.component';
import { Tasabcv } from '../models/tasabcba';
import { TasabcvComponent } from './tasabcv/tasabcv.component';

const childRoutes: Routes = [

    { path: '',  component: DashboardComponent, data:{title:'Dashboard'} },
    //auth

    //paginas

            { path: 'usuarios', component: UsersListComponent},
            { path: 'user/create', component: UserEditComponent},
            { path: 'user/edit/:id', component: UserEditComponent},
            { path: 'usuario/detail/:id', component: UserDetailsComponent},
            
            { path: 'padres', component: ListComponent},
            { path: 'padre/detail/:id', component: DetailparentComponent},
            
            { path: 'proveedores', component: ListProveedorComponent},
            { path: 'proveedor/create', component: EditProveedorComponent},
            { path: 'proveedor/edit/:id', component: EditProveedorComponent},
            { path: 'proveedor/view/:id', component: DetailProveedorComponent},

            { path: 'slider', component: SliderIndexComponent},
            { path: 'slider/create', component: SliderEditComponent},
            { path: 'slider/edit/:id', component: SliderEditComponent},
            
            { path: 'payments', component: PaymentsComponent},
            { path: 'payment/edit/:id', component: PaymentEditComponent},
            { path: 'payment-detail/:id', component: PaymentDetailsComponent},
            
            { path: 'config', component: ConfigComponent},
            { path: 'tasabcv', component: TasabcvComponent},


    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: '**', component:  DashboardComponent },





]

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoute),
    RouterModule.forChild(childRoutes),
  ],
    exports: [ RouterModule ],
})
export class ChildRoutesModule { }
