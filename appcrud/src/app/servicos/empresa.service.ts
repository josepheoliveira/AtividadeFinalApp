import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  private url = 'http://localhost/apiAppCrud/apiEmpresa.php';
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

  update(empresa: Empresa, id:any){
    return this.http.put(this.url+'?id='+ id, empresa);
  }
}
