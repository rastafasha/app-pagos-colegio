import { Component, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ParentService } from 'src/app/services/parent-service.service';
import { Parent } from 'src/app/models/parents';
@Component({
  selector: 'app-detailparent',
  templateUrl: './detailparent.component.html',
  styleUrls: ['./detailparent.component.css']
})
export class DetailparentComponent {
   @Output() directorioUser : any;
  
    title = "Detalles de la cuenta";
    profileForm: FormGroup;
    imagePath: string;
    error: string;
    uploadError: boolean;
    display = false;
    public option_selected:number = 1;
    public solicitud_selected:any = null;
  
    public selectedValue!: string;
  
    identity: any;
  
    user: Parent;
    parent: Parent;
    userprofile: Parent;
  
    roles:any;
    profileSeleccionado: Parent;
  
    user_id: any;
    errors:any = null;
  
    constructor(
      private location: Location,
      private parentService: ParentService,
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
      this.parentService.getUserById(+id).subscribe(
        (res:any) =>{
          this.userprofile = res.representante;
          this.user_id = res.user.id;
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
