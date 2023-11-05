import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaiFilhosComponentsModule } from './pages/pai-filhos-components.modulo';

const routes: Routes = [
  {path:`pai`, loadChildren:() => PaiFilhosComponentsModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
