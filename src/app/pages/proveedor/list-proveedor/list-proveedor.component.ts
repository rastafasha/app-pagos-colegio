import { HttpClient, HttpBackend } from '@angular/common/http';
import { Component } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-proveedor',
  templateUrl: './list-proveedor.component.html',
  styleUrls: ['./list-proveedor.component.css']
})
export class ListProveedorComponent {
  title = "Proveedores";

  proveedores: Proveedor;
  error:any;
  query:string ='';
  p: number = 1;
  count: number = 8;
  loading = false;

  constructor(
    private proveedorService: ProveedorService,
    private location: Location,
    private http: HttpClient,
    handler: HttpBackend
    ) {
      this.http = new HttpClient(handler);
    }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getProveedores();
  }




  getProveedores(): void {
    this.proveedorService.getProveedores().subscribe(
      (res:any) =>{
        this.proveedores = res.proveedores;
        error => this.error = error;
        // console.log(this.usuarios);
      }
    );
  }

  search() {
    return this.proveedorService.search(this.query).subscribe(
      (res:any)=>{
        console.log(res);
        this.proveedores = res;
        if(!this.query){
          this.ngOnInit();
        }
      });
  }

  public PageSize(): void {
    this.getProveedores();
    this.query = '';
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  cambiarStatus(data:any){
    let VALUE = data.status;
    // console.log(VALUE);
    
    this.proveedorService.updateStatusAdmin(data, data.id).subscribe(
      resp =>{
        // console.log(resp);
        Swal.fire('Updated', `Client Status Updated successfully!`, 'success');
        this.getProveedores();
      }
    )
  }

}
