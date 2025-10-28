import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/users';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { Materia } from 'src/app/models/materia';
import { MateriaService } from 'src/app/services/materia.service';


interface HtmlInputEvent extends Event{
  target : HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userForm: FormGroup;
  passwordForm: FormGroup;
  public formSumitted = false;
  isLoading:boolean = false;
  public user: User;
  userprofile!: User;
  id:any;
  error:string;
  title:string;
  infoUser:string;
  materia: Materia | undefined;
  materias: Materia | undefined;

  uploadError: string;

  submitted = false;

  public storage = environment.url_media


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private accountService: AuthService,
     private materiaService: MateriaService,
    private fb: FormBuilder,

  ) {
this.user = this.userService.user;
  }



  ngOnInit() {
    window.scrollTo(0, 0);
    this.validarFormulario();
    this.validarFormularioPassword();
    this.activatedRoute.params.subscribe( ({id}) => this.iniciarFormulario(id));
    this.getUser();
    this.getMaterias();
    this.accountService.closeMenu();

  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  getUser(): void {
    this.isLoading = true;
    this.user = JSON.parse(localStorage.getItem('user'));
    // this.activatedRoute.params.subscribe( ({id}) => this.getUserProfile(id));
    if(!this.user || !this.user.id || this.user.id == null || this.user.id == undefined){
      this.router.navigateByUrl('/login');

    }
      this.id = this.user.id;
      this.isLoading = false;
  }

   getMaterias() {
    this.materiaService.getMaterias().subscribe((resp: any) => {
      this.materias = resp;
      // console.log(resp);
    });
  }

  iniciarFormulario(id:number){
    // const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.title = 'Editar Perfil';
      this.userService.getUserById(+id).subscribe(
        (res:any) => {
          console.log(res);
          this.userprofile = res;
          
          this.userForm.patchValue({
            id: res.user.id,
            name: res.user.name,
            surname: res.user.surname,
            role: res.user.role,
            email: res.user.email,
            materia_id: res.user.materia_id,
            empresa: res.user.empresa,
            address: res.user.address,
            telefono: res.user.telefono,
            mobile: res.user.mobile,
            n_doc: res.user.n_doc,
            birth_date: res.user.birth_date,
            gender: res.user.gender,
          });
          // this.imagePath = res.image;
          this.infoUser = res.user;
          // console.log(this.infoDirectorio);
        }
      );
    } else {
      this.title = 'Crear Perfil';
    }
  }

  validarFormulario(){
    this.userForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      // password: ['', Validators.required],
      n_doc: ['', Validators.required],
      // email: ['', Validators.required],
      materia_id: ['',],
      address: ['',],
      telefono: ['',],
      mobile: ['',],
      grado: ['',],
      birth_date: ['',],
      gender: ['',],
      
      // status: ['PENDING'],
    })
  }

  get name() { return this.userForm.get('name'); }
    get surname() { return this.userForm.get('surname'); }
    get password() { return this.userForm.get('password'); }
    get email() { return this.userForm.get('email'); }
    get n_doc() { return this.userForm.get('n_doc'); }
    // get status() { return this.userForm.get('status'); }
    

  avatarUpload(datos) {
    const data = JSON.parse(datos.response);
    this.userForm.controls['image'].setValue(data.image);//almaceno el nombre de la imagen
  }





  save() {
    this.submitted = true;
    // if(this.userForm.invalid){
    //   return;
    //     }

    const formData = new FormData();
    formData.append('name', this.userForm.get('name').value);
    formData.append('surname', this.userForm.get('surname').value);
    // formData.append('password', this.userForm.get('password').value);
    // formData.append('role', this.userForm.get('role').value);
    // formData.append('email', this.userForm.get('email').value);
    // formData.append('status', 'PENDING');

     if (this.userForm.value.birth_date) {
      formData.append("birth_date", this.userForm.value.birth_date);
      
    }
     if (this.userForm.value.gender) {
      formData.append("gender", this.userForm.value.gender);
      
    }
     if (this.userForm.value.telefono) {
      formData.append("telefono", this.userForm.value.telefono);
      
    }
     if (this.userForm.value.mobile) {
      formData.append("mobile", this.userForm.value.mobile);
      
    }
    if (this.userForm.value.n_doc) {
      formData.append("n_doc", this.userForm.value.n_doc);
      
    }
    if (this.userForm.value.gender) {
      formData.append("gender", this.userForm.value.gender);
      
    }
    // if (this.FILE_AVATAR) {
    //   formData.append("imagen", this.FILE_AVATAR);
    // }
    

    const id = this.userForm.get('id').value;

    if (id) {
      const data = {
        ...this.userForm.value,
        user_id: this.user.id
      }
      this.userService.update(data).subscribe(
        (res:any) => {
          this.infoUser = res;
          Swal.fire('Guardado', 'Los cambios fueron actualizados', 'success');
          this.router.navigate(['/dashboard/users']);
        },
        error => this.error = error
      );
    } else {
      const data = {
        ...this.userForm.value,
        user_id: this.user.id
      }
      this.accountService.crearUsuario(data).subscribe(
        (res:any) => {
          Swal.fire('Guardado', 'Los cambios fueron creados', 'success');
            this.router.navigate(['/dashboard/users']);
        },
        error => this.error = error
      );
    }


  }





//cambiar contraseña

  validarFormularioPassword(){
    this.passwordForm = this.fb.group({
      id: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    }, {
      validators: this.passwordsIguales('password', 'password2')
    });
  }

  passwordsIguales(pass1Name: string, pass2Name: string){
    return (formGroup: FormGroup) =>{
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if(pass1Control.value === pass2Control.value){
        pass2Control.setErrors(null)
      }else{
        pass2Control.setErrors({noEsIgual: true});
      }
    }
  }

passwordNoValido(){
  const pass1 = this.passwordForm?.get('password').value;
  const pass2 = this.passwordForm?.get('password2').value;

  if((pass1 !== pass2) && this.formSumitted){
    return true;
  }else{
    return false;
  }
}

cambiarPassword(){
  this.formSumitted = true;

  const {email } = this.passwordForm.value;

  if(this.userprofile){
    // Check if token exists before calling
    const token = localStorage.getItem('token');
    if (!token) {
      Swal.fire('Error', 'Usuario no autenticado. Por favor inicie sesión.', 'error');
      this.router.navigate(['/login']);
      return;
    }

    //actualizar
    const data = {
      ...this.passwordForm.value,
      id: this.userprofile.id
    }
    this.accountService.newPassword(data).subscribe(
      resp =>{
        Swal.fire('Cambiado', `Enlace para restablecer su contraseña ha sido enviado a su correo electrónico`, 'success');
      },
      error => {
        if (error.status === 401) {
          Swal.fire('Error', 'Usuario no autenticado. Por favor inicie sesión.', 'error');
          this.router.navigate(['/login']);
        } else {
          Swal.fire('Error', 'Error al cambiar la contraseña.', 'error');
        }
      }
    );

  }
}



}
