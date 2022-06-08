import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cadastroservico{
  id: number;
  nome: string;
  descricao: string;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private url = 'http://localhost/apiAppCrud/apiCadastroservico';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Cadastroservico]>(this.url);
  }

  remove(id: any){
    return this.http.delete(this.url+'?id=' + id);
  }

  create(cadastroservico : Cadastroservico){
    return this.http.post(this.url, cadastroservico);
  }

  update(cadastroservico: Cadastroservico, id:any){
    return this.http.put(this.url+'?id='+ id, cadastroservico);
  }
}
