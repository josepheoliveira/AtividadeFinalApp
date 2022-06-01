import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Empresa{
  id: number;
  nome : string;
  datadeabertura: string;
  cnpj: string;
  situacaocadastral: string;  
  endereco: string;
  tipodeservico: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private url = 'http://localhost/apiAppCrud/apiEmpresa';
  constructor(private http:  HttpClient) { }

  getAll(){
    return this.http.get<[Empresa]>(this.url);
  }

  remove(id: any){
    return this.http.delete(this.url+'?id=' + id);
  }

  create(empresa : Empresa){
    return this.http.post(this.url, empresa);
  }

  update(cliente: Empresa, id:any){
    return this.http.put(this.url+'?id='+ id, cliente);
  }
}
