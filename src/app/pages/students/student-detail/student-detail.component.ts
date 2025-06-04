import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student-service.service';
import { Location } from '@angular/common';
import { CalificacionService } from 'src/app/services/calificacion.service';
import { Calificacion } from 'src/app/models/calificacion';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {
title = "Detalles de la cuenta";
    profileForm: FormGroup;
    imagePath: string;
    error: string;
    uploadError: boolean;
    display = false;
    public option_selected:number = 1;
    public solicitud_selected:any = null;
    isLoading:boolean = false;
    public selectedValue!: string;
  
    identity: any;
  
    user: Student;
    parent: Student;
    userprofile: Student;

    calificaciones:Calificacion;
  
    roles:any;
    profileSeleccionado: Student;
  
    user_id: any;
    student_id: any;
    errors:any = null;
  
    constructor(
      private location: Location,
      private studentService: StudentService,
      private activatedRoute: ActivatedRoute,
    ) {
    }
  
    ngOnInit(): void {
      window.scrollTo(0,0);
      this.closeMenu();
      // this.getUser();
      this.activatedRoute.params.subscribe( ({id}) => this.getUserServer(id));
    }
    closeMenu(){
      var menuLateral = document.getElementsByClassName("sidebar");
        for (var i = 0; i<menuLateral.length; i++) {
           menuLateral[i].classList.remove("active");
  
        }
    }
    goBack() {
      this.location.back(); // <-- go back to previous location on cancel
    }
    
    getUserServer(id:number){
      this.isLoading = true;
      this.studentService.getUserById(+id).subscribe(
        (res:any) =>{
          this.userprofile = res.student;
          // this.calificaciones = res.calificaciones;
          if(res.student && res.student.id){
            this.student_id = res.student.id;
          } else {
            this.student_id = null;
            console.error('User or user.id is undefined in response:', res);
          }
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching user by id:', error);
          this.student_id = null;
        }
      );
    }
  
   public onReady( editor:any ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
  }


  optionSelected(value:number){
      this.option_selected = value;
      if(this.option_selected === 1){

        this.ngOnInit();
      }
      if(this.option_selected === 2){
        this.solicitud_selected = null;
      }
      if(this.option_selected === 3){
        this.solicitud_selected = null;
        
      }
    }
}
