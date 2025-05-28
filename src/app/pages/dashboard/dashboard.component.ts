import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users';
import { UserService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Proveedor } from 'src/app/models/proveedor';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  error: string;

  user: any;
  proveedor: Proveedor;
  role:any;

  constructor(
    private proveedorService: ProveedorService,
    private ativatedRoute: ActivatedRoute,
    ) {}

  ngOnInit() {

    window.scrollTo(0, 0);

    let USER = localStorage.getItem("user");
    this.user = JSON.parse(USER ? USER: '');
    this.role = this.user.roles[0];

     this.getProveedorporUsuario();

  }

  getProveedorporUsuario(){
    this.proveedorService.getProveedorByUser(this.user.id).subscribe((resp:any)=>{
      // console.log(resp);
      this.proveedor = resp.proveedor;
    })
  }

  


}
