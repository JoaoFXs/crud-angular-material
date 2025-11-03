import { Injectable } from '@angular/core';
import { Cliente } from '../cadastro/cliente'
//Decorator para armazernar classe e poder reutiliza-la em outro momento, ou seja, apenas um para tudo.
@Injectable({
  providedIn: 'root'//Está no root da aplicação, entao posso inserir onde eu quiser
})
export class ClienteService {
  constructor() { }

  static REPO_CLIENTES = "_CLIENTES";
  salvar(cliente: Cliente){
    const storage = this.obterStorage();
    storage.push(cliente);
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
    console.log(cliente);
  }

  obterStorage(): Cliente[]{
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if(repositorioClientes){
      const clientes: Cliente [] = JSON.parse(repositorioClientes);
      return clientes;
    }

    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }

}
