import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './factura/factura/factura.component';
import { HistorialComponent } from './historial/historial/historial.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
   {
    path:'',
    component:HomeComponent
   },
   {
    path:'factura',
    component:FacturaComponent
   },
   {
    path:'historial',
    component:HistorialComponent
   },
   {
    path:'**',
    component:HomeComponent
   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
