import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { Proveedor } from 'src/app/models/proveedor';

@Component({
  selector: 'app-edit-proveedor',
  templateUrl: './edit-proveedor.component.html',
  styleUrls: ['./edit-proveedor.component.css']
})
export class EditProveedorComponent {

  public user: any;
  public user_id: any;
  error:string;
  pageTitle:string;
  id:any;
  proveedorSelected:Proveedor;

  proveedorForm: FormGroup;
  submitted = false;
  accountService: any;

  constructor(
    public ativatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private location: Location,
    private proveedorService: ProveedorService,
  ) { }

  ngOnInit(): void {
    // window.scrollTo(0, 0);
    let USER = localStorage.getItem("user");
    this.user = JSON.parse(USER ? USER: '');

    this.ativatedRoute.params.subscribe((resp:any)=>{
      this.user_id = resp.id;
     })
     this.iniciarFormulario();
    
  }
  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }


  iniciarFormulario(){
    // const id = this.route.snapshot.paramMap.get('id');
    if (this.user_id ) {
      this.pageTitle = 'Editar Proveedor';
      this.validarFormulario();
      this.proveedorService.getProveedorByUser(this.user_id).subscribe(
        (res:any) => {
          console.log(res);
          this.proveedorSelected = res.proveedor;
          
          this.proveedorForm.patchValue({
            id: res.proveedor?.id,
            nombre_empresa: res.proveedor?.nombre_empresa,
            ruc: res.proveedor?.ruc,
            email: res.proveedor?.email,
            web_site: res.proveedor?.web_site,
            nombre_contacto_principal: res.proveedor?.nombre_contacto_principal,
            email_contacto_principal: res.proveedor?.email_contacto_principal,
            phone_contacto_principal: res.proveedor?.phone_contacto_principal,
            nombre_razon_social: res.proveedor?.nombre_razon_social,
            direccion: res.proveedor?.direccion,
            telefonos: res.proveedor?.telefonos,
            nombre_representante_legal: res.proveedor?.nombre_representante_legal,
            cedula_representante_legal: res.proveedor?.cedula_representante_legal,
            telefono_representante_legal: res.proveedor?.telefono_representante_legal,
            cuenta_bancaria: res.proveedor?.cuenta_bancaria,
            banco: res.proveedor?.banco,
            swift_bic: res.proveedor?.swift_bic,
            documentos_de_solvencia_financiera: res.proveedor?.documentos_de_solvencia_financiera,
            descripcion_prod_serv: res.proveedor?.cuenta_bancaria,
            categoria_prod_serv: res.proveedor?.categoria_prod_serv,
            certificaciones: res.proveedor?.certificaciones,
            credenciales: res.proveedor?.credenciales,
            aviso_operacion: res.proveedor?.aviso_operacion,
            paz_salvos_dgi_y_css: res.proveedor?.paz_salvos_dgi_y_css,
            documento_incorporacion_empresa_rp: res.proveedor?.documento_incorporacion_empresa_rp,
            referencias_comerciales: res.proveedor?.referencias_comerciales,
            referencias_bancarias: res.proveedor?.referencias_bancarias,
            informes_auditorias: res.proveedor?.informes_auditorias,
            otros: res.proveedor?.otros,
            status: res.proveedor?.status,
          });

        }
      );
    } else {
      this.pageTitle = 'Crear Proveedor';
      this.validarFormulario();
    }
  }

  validarFormulario(){
    this.proveedorForm = this.fb.group({
      id: [''],
      nombre_empresa: ['', Validators.required],
      ruc: ['', Validators.required],
      email: ['', Validators.required],
      web_site: ['', Validators.required],
      nombre_contacto_principal: ['', Validators.required],
      email_contacto_principal: ['', Validators.required],
      phone_contacto_principal: ['', Validators.required],
      nombre_razon_social: ['', Validators.required],
      direccion: ['', Validators.required],
      telefonos: ['', Validators.required],
      nombre_representante_legal: ['', Validators.required],
      cedula_representante_legal: ['', Validators.required],
      telefono_representante_legal: ['', Validators.required],
      cuenta_bancaria: ['', Validators.required],
      banco: ['', Validators.required],
      swift_bic: ['', Validators.required],
      documentos_de_solvencia_financiera: ['', Validators.required],
      descripcion_prod_serv: ['', Validators.required],
      categoria_prod_serv: ['', Validators.required],
      certificaciones: ['', Validators.required],
      credenciales: ['', Validators.required],
      aviso_operacion: ['', Validators.required],
      paz_salvos_dgi_y_css: ['', Validators.required],
      documento_incorporacion_empresa_rp: ['', Validators.required],
      referencias_comerciales: ['', Validators.required],
      referencias_bancarias: ['', Validators.required],
      informes_auditorias: ['', Validators.required],
      otros: ['', Validators.required],
      
      status: ['PENDING'],
    })
  }

  get nombre_empresa() { return this.proveedorForm.get('nombre_empresa'); }
  get ruc() { return this.proveedorForm.get('ruc'); }
  get email() { return this.proveedorForm.get('email'); }
  get web_site() { return this.proveedorForm.get('web_site'); }
  get nombre_contacto_principal() { return this.proveedorForm.get('nombre_contacto_principal'); }
  get email_contacto_principal() { return this.proveedorForm.get('email_contacto_principal'); }
  get phone_contacto_principal() { return this.proveedorForm.get('phone_contacto_principal'); }
  get nombre_razon_social() { return this.proveedorForm.get('nombre_razon_social'); }
  get direccion() { return this.proveedorForm.get('direccion'); }
  get telefonos() { return this.proveedorForm.get('telefonos'); }
  get nombre_representante_legal() { return this.proveedorForm.get('nombre_representante_legal'); }
  get cedula_representante_legal() { return this.proveedorForm.get('cedula_representante_legal'); }
  get telefono_representante_legal() { return this.proveedorForm.get('telefono_representante_legal'); }
  get cuenta_bancaria() { return this.proveedorForm.get('cuenta_bancaria'); }
  get banco() { return this.proveedorForm.get('banco'); }
  get swift_bic() { return this.proveedorForm.get('swift_bic'); }
  get documentos_de_solvencia_financiera() { return this.proveedorForm.get('documentos_de_solvencia_financiera'); }
  get descripcion_prod_serv() { return this.proveedorForm.get('descripcion_prod_serv'); }
  get categoria_prod_serv() { return this.proveedorForm.get('categoria_prod_serv'); }
  get certificaciones() { return this.proveedorForm.get('certificaciones'); }
  get credenciales() { return this.proveedorForm.get('credenciales'); }
  get aviso_operacion() { return this.proveedorForm.get('aviso_operacion'); }
  get paz_salvos_dgi_y_css() { return this.proveedorForm.get('paz_salvos_dgi_y_css'); }
  get documento_incorporacion_empresa_rp() { return this.proveedorForm.get('documento_incorporacion_empresa_rp'); }
  get referencias_bancarias() { return this.proveedorForm.get('referencias_bancarias'); }
  get informes_auditorias() { return this.proveedorForm.get('informes_auditorias'); }
  get otros() { return this.proveedorForm.get('otros'); }
   

  save() {
    // this.submitted = true;
    // if(this.proveedorForm.invalid){
    //   return;
    //     }

    const formData = new FormData();
    formData.append('nombre_empresa', this.proveedorForm.get('nombre_empresa').value);
    formData.append('ruc', this.proveedorForm.get('ruc').value);
    formData.append('email', this.proveedorForm.get('email').value);
    formData.append('web_site', this.proveedorForm.get('web_site').value);
    formData.append('nombre_contacto_principal', this.proveedorForm.get('nombre_contacto_principal').value);
    formData.append('email_contacto_principal', this.proveedorForm.get('email_contacto_principal').value);
    formData.append('phone_contacto_principal', this.proveedorForm.get('phone_contacto_principal').value);
    formData.append('nombre_razon_social', this.proveedorForm.get('nombre_razon_social').value);
    formData.append('direccion', this.proveedorForm.get('direccion').value);
    formData.append('telefonos', this.proveedorForm.get('telefonos').value);
    formData.append('nombre_representante_legal', this.proveedorForm.get('nombre_representante_legal').value);
    formData.append('cedula_representante_legal', this.proveedorForm.get('cedula_representante_legal').value);
    formData.append('telefono_representante_legal', this.proveedorForm.get('telefono_representante_legal').value);
    formData.append('cuenta_bancaria', this.proveedorForm.get('cuenta_bancaria').value);
    formData.append('banco', this.proveedorForm.get('banco').value);
    formData.append('swift_bic', this.proveedorForm.get('swift_bic').value);
    formData.append('documentos_de_solvencia_financiera', this.proveedorForm.get('documentos_de_solvencia_financiera').value);
    formData.append('descripcion_prod_serv', this.proveedorForm.get('descripcion_prod_serv').value);
    formData.append('categoria_prod_serv', this.proveedorForm.get('categoria_prod_serv').value);
    formData.append('certificaciones', this.proveedorForm.get('certificaciones').value);
    formData.append('credenciales', this.proveedorForm.get('credenciales').value);
    formData.append('aviso_operacion', this.proveedorForm.get('aviso_operacion').value);
    formData.append('paz_salvos_dgi_y_css', this.proveedorForm.get('paz_salvos_dgi_y_css').value);
    formData.append('referencias_comerciales', this.proveedorForm.get('referencias_comerciales').value);
    formData.append('referencias_bancarias', this.proveedorForm.get('referencias_bancarias').value);
    formData.append('informes_auditorias', this.proveedorForm.get('informes_auditorias').value);
    formData.append('otros', this.proveedorForm.get('otros').value);
    formData.append('status', 'PENDING');
    

    const id = this.proveedorForm.get('id').value;

    if (id) {
      const data = {
        ...this.proveedorForm.value,
      }
      this.proveedorService.updateProveedor(data, this.user_id).subscribe(
        (res:any) => {
          Swal.fire('Guardado', 'Los cambios fueron actualizados', 'success');
          this.router.navigate(['/dashboard/users']);
        },
        error => this.error = error
      );
    } else {
      const data = {
        ...this.proveedorForm.value,
        user_id: this.user_id 
      }
      this.proveedorService.createProveedor(data).subscribe(
        (res:any) => {
          Swal.fire('Guardado', 'Los cambios fueron creados', 'success');
            this.router.navigate(['/dashboard/users']);
        },
        error => this.error = error
      );
    }
    

  }

  cambiarStatus(data:any){
    let VALUE = data.status;
    // console.log(VALUE);
    
    this.proveedorService.updateStatusClient(data, data.id).subscribe(
      resp =>{
        // console.log(resp);
        Swal.fire('Updated', `Client Status Updated successfully!`, 'success');
        this.ngOnInit();
      }
    )
  }
}
