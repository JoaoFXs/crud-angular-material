import { Component, OnInit} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ClienteService } from '../_shared/cliente.service';
import { Cliente } from '../cadastro/cliente';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    CommonModule
  ],

  standalone: true,
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit{
  nomeBusca: string = '';
  listaClientes: Cliente[] = [];
  colunasTable: string[] = ["id", "nome", "cpf", "dataNascimento", "email", "ações"];


  constructor(
    private router : Router,
    private service: ClienteService){}

  ngOnInit(): void {
      this.listaClientes = this.service.pesquisarClientes('');
  }

  pesquisar(){
     this.listaClientes = this.service.pesquisarClientes(this.nomeBusca);
  }

  preparaEditar(id: string){
    //router.navigate
    this.router.navigate(['/cadastro'], {queryParams: {"id": id}});
  }

  preparaDeletar(cliente: Cliente){
    cliente.deletando = true;
  }

  deletar(cliente: Cliente){
    this.service.deletarCliente(cliente);
    this.listaClientes = this.service.pesquisarClientes('');

  }

}
