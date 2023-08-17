import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdListComponent } from './prod-list/prod-list.component';
import { CreateProdComponent } from './create-prod/create-prod.component';
import { UpdateProdComponent } from './update-prod/update-prod.component';

const routes: Routes = [
  {path: 'Produits', component: ProdListComponent},
  {path: 'create-Produit', component: CreateProdComponent},
  {path: 'update-produit/:id', component: UpdateProdComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
