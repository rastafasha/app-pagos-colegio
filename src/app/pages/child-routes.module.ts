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


const childRoutes: Routes = [

    { path: '',  component: DashboardComponent, data:{title:'Dashboard'} },
    //auth

    //paginas

            { path: 'usuarios', component: UsersListComponent},
            { path: 'user/create', component: UserEditComponent},
            { path: 'user/edit/:id', component: UserEditComponent},
            { path: 'usuario/detail/:id', component: UserDetailsComponent},
            
            { path: 'proveedores', component: ListProveedorComponent},
            { path: 'proveedor/create', component: EditProveedorComponent},
            { path: 'proveedor/edit/:id', component: EditProveedorComponent},
            { path: 'proveedor/view/:id', component: DetailProveedorComponent},

            { path: 'slider', component: SliderIndexComponent},
            { path: 'slider/create', component: SliderEditComponent},
            { path: 'slider/edit/:id', component: SliderEditComponent},
            


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
