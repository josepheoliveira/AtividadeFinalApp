import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cliente{
  id: number;
  nome : String;
  cpf: String; 
  rg: String;
  endereco: String;
  telefone: String;
 
}


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = 'http://localhost/apiAppCrud/apiCliente';
  constructor(private http:HttpClient) { }

  create(cliente : Cliente){
    return this.http.post(this.url, cliente);
  }

  getAll(){
    return this.http.get<[Cliente]>(this.url);
  }

  remove(id: any){
    return this.http.delete(this.url+'?id=' + id);
  }
}
