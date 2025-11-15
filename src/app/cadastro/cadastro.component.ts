import { Component, OnInit, Inject, inject } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card"
import {FormsModule} from "@angular/forms"
import {MatFormFieldModule} from "@angular/material/form-field"
import { MatInputModule} from '@angular/material/input'
import { MatIcon } from "@angular/material/icon";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule} from "@angular/material/button";
import { Cliente } from './cliente';
import { ClienteService } from '../_shared/cliente.service'
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatSnackBar } from  '@angular/material/snack-bar';
@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, MatIcon, MatIconModule, MatButtonModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit{
  
    cliente: Cliente = Cliente.newCliente();
    atualizando: boolean = false;
    snack: MatSnackBar = inject(MatSnackBar);
    constructor(
      private service: ClienteService,
      private route: ActivatedRoute,
      private router: Router){
      
    }

    ngOnInit(): void {
      // A propriedade queryParamMap é um Observable que emite um mapa de todos os parâmetros de consulta (query params) presentes na URL (a parte depois do ?, como ?id=123).
        this.route.queryParamMap.subscribe((query: any) => {
          const params = query['params'];
          const id = params['id'];
          console.log("Params: ",params);
          if(id){
            let clienteEncontrado = this.service.pesquisarPorId(id);
            if(clienteEncontrado){
              this.atualizando = true;
              this.cliente = clienteEncontrado;
            }
          }
        })
    }

    public salvar(){
      if(!this.atualizando){
        this.service.salvar(this.cliente);
        this.cliente = Cliente.newCliente();
        console.log("Dados Cliente: ", this.cliente);
        this.mostrarMensagem('Salvo com sucesso!');
      }else{
        this.service.atualizar(this.cliente);
        this.router.navigate(['/consulta']);
        this.atualizando = false;
        this.mostrarMensagem('Atualizado com sucesso!');
      }
      
    }

    public mostrarMensagem(mensagem: string){
      this.snack.open(mensagem, 'OK');
    }

}
