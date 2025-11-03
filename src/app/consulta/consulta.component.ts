import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ClienteService } from '../_shared/cliente.service';
import { Cliente } from '../cadastro/cliente';
@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit{
  listClientes: Cliente[] = [];
  constructor(private service: ClienteService){}

  ngOnInit(): void {
      this.listClientes = this.service.pesquisarClientes('');
  }

}
