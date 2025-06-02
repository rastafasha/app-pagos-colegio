import { Component } from '@angular/core';
import { Paymentmethod } from 'src/app/models/paymentmethod';
import { AccountService } from 'src/app/services/account.service';
import { PaimentmethodService } from 'src/app/services/paymentmethod.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-config',
  standalone: false,
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {

    title = 'Configuración Pagos';
    public tiposdepago: Paymentmethod;
    error: string;
    uploadError: string;
    tipoSeleccionado:any;
    pagoSeleccionado:any;
    tiposdepagos:any;
    isLoading:boolean = false;
    bankAccountType:string;
    bankName:string;
    bankAccount:string;
    ciorif:string;
    telefono:string;
    email:string;
    tipo:string;



      constructor(
        private paymentMethodService: PaimentmethodService,
        private accountService:AccountService
        ) {}
    
      ngOnInit(): void {
          this.getTiposdePago();
          this.accountService.closeMenu()
      }
    
      selectedTypeEdit(tipo:any){
          this.pagoSeleccionado = tipo;
          // console.log(this.pagoSeleccionado);
      }
    
      selectedType(tipodepago:any){
          this.tipoSeleccionado = tipodepago;
          // console.log(this.tipoSeleccionado);
      }
    
      getTiposdePago(){
        this.isLoading = true;
          this.paymentMethodService.getPaymentmethods().subscribe((resp:any)=>{
            // console.log(resp);
            this.tiposdepagos = resp;
            this.isLoading = false;
            // console.log(this.tiposdepagos);
          })
      }
      
      cambiarStatus(tipodepago:any){
          const VALUE = tipodepago.status;
          // console.log(VALUE);
          
          this.paymentMethodService.updatePaymentmethod(tipodepago, tipodepago.id).subscribe(
            resp =>{
              // console.log(resp);
              Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Actualizado',
              showConfirmButton: false,
              timer: 1500,
            });
              this.getTiposdePago();
    
    
            }
          )
        }
    
    
    
      save(){
    
          const data = {
            tipo: this.tipo,
            bankAccountType: this.bankAccountType,
            bankName: this.bankName,
            bankAccount: this.bankAccount,
            ciorif:this.ciorif,
            telefono:this.telefono,
            email: this.email
          }
          this.paymentMethodService.createPaymentmethod(data).subscribe((resp:any)=>{
            // console.log(resp);
            // Swal.fire('Actualizado', this.text_success, 'success' );
       
            
            this.bankAccountType ='';
              this.bankName ='';
              this.bankAccount ='';
              this.ciorif ='';
              this.telefono ='';
              this.email ='';
              // this.tipo ='';
            this.getTiposdePago();
          })
        }
      
      deleteTipoPago(tiposdepago:any){
    
          this.paymentMethodService.deletePaymentmethod(tiposdepago.id).subscribe(
            (resp:any) =>{
              this.getTiposdePago();
            });
          
        }
  

}
