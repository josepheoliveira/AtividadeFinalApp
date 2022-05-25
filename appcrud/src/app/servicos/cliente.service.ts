import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cliente{
  id: number;
  nomeCompleto : String;
  dataNascimento: String;
  cpf: String; 
  rg: String;
  endereço: String;
  telefone: String;
  login: String;
  senha: String;
}


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = 'http://localhost/apiAppCrud/apiCliente';
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<[Cliente]>(this.url);
  }

  remove(id: any){
    return this.http.delete(this.url+'?id=' + id);
  }
}
