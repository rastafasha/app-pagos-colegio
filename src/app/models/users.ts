import { environment } from "src/environments/environment";
import { Materia } from "./materia";
const base_url = environment.url_media;

export class User {

    id: string;
    // role_id: number = 3; // 3 = Rol miembro
    username: string = "";
    materia_id: string = "";
    materia:Materia;
    name: string = "";
    surname: string = "";
    n_doc: string = "";
    address: string = "";
    mobile: string = "";
    telefono: string = "";
    birth_date: Date ;
    gender: number;
    email: string = "";
    password?: string = "";
    token: string = "";
    grado: number = 0;
    is_active: number = 0;
    created_at: string = "";
    image: string = "";
    roles?: 'SUPERADMIN' | 'ADMIN' | 'MEMBER' | 'GUEST'|'MAESTRO';
    



    // public get isActive():boolean{
    //     return (this.is_active === 1 ? true: false);
    // }


    get imagenUrl(){

      if(!this.image){
        return `${base_url}users/no-image.jpg`;
      } else if(this.image.includes('https')){
        return this.image;
      } else if(this.image){
        return `${base_url}users/${this.image}`;
      }else {
        return `${base_url}/no-image.jpg`;
        // return `./assets/img/no-image.jpg`;
      }

    }

}
