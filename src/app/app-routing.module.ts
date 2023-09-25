import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { CriarNotaComponent } from './componentes/criar-nota/criar-nota.component';
import { NotasComponent } from './componentes/notas/notas.component'


const routes: Routes = [
  {
    path:'home',
    component: MainComponent
  }, 
  {
    path:'criar-nota',
    component: CriarNotaComponent 
  },
  {
    path:'nota',
    component: NotasComponent 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
