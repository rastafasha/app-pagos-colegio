import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Location } from '@angular/common';
import { Proveedor } from 'src/app/models/proveedor';
import { User } from 'src/app/models/users';
@Component({
  selector: 'app-detail-proveedor',
  templateUrl: './detail-proveedor.component.html',
  styleUrls: ['./detail-proveedor.component.css']
})
export class DetailProveedorComponent {

  title = "Proveedor";
  user_id:any;
  proveedorSelected:Proveedor;
  userSelected:User;

  constructor(
    private proveedorService: ProveedorService,
    private ativatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.ativatedRoute.params.subscribe((resp:any)=>{
      this.user_id = resp.id;
     })
     this.getProveedor();
  }

  getProveedor(){
    this.proveedorService.getProveedorByUser(this.user_id).subscribe((resp:any)=>{
      console.log(resp);
      this.proveedorSelected = resp.proveedor;
      this.userSelected = resp.user;
    })
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
