import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Paymentmethod } from '../models/paymentmethod';

const baseUrl = environment.url_media;

@Injectable({
  providedIn: 'root'
})
export class PaimentmethodService {

  public paymentMethod: Paymentmethod;


  constructor(private http: HttpClient) { }

  get token():string{
    return localStorage.getItem('auth_token') || '';
  }


  get headers(){
    return{
      headers: {
        'auth_token': this.token
      }
    }
  }


  getPaymentmethods() {
    const url = `${baseUrl}/paymentmethods`;
    return this.http.get<any>(url,this.headers)
      .pipe(
        map((resp:{ok: boolean, tiposdepagos: Paymentmethod}) => resp.tiposdepagos)
      )
  }

  getPaymentmethod(tipodepago: any) {
    const url = `${baseUrl}/paymentmethod/show/${tipodepago}`;
    return this.http.get<any>(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, tipodepago: Paymentmethod}) => resp.tipodepago)
        );
  }


  createPaymentmethod(paymentmethod:any) {
    const url = `${baseUrl}/paymentmethod/store`;
    return this.http.post(url, paymentmethod, this.headers);
  }


  updatePaymentmethod(paymentmethod:Paymentmethod, id: number) {
    return this.http.put<any>(baseUrl + '/paymentmethod/update/' + id, paymentmethod, this.headers)

  }

  deletePaymentmethod(paymentmethod: any) {
    const url = `${baseUrl}/paymentmethod/destroy/${paymentmethod}`;
    return this.http.delete(url, this.headers);
  }
}