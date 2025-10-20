import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component'
import { ConsultaComponent } from './consulta/consulta.component';
//Classe com constant para cadastro de rotas e seus components
export const routes: Routes = [
    {
        path: 'cadastro', component: CadastroComponent//Caminho + Component
    },
    {
        path: 'consulta', component: ConsultaComponent
    }
];
