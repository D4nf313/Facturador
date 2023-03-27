import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialComponent } from './historial.component';
import { TarjetaFacturaComponent } from '../tarjeta/tarjeta-factura/tarjeta-factura.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HistorialComponent,
    TarjetaFacturaComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HistorialModule { }
