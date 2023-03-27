import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaComponent } from './factura.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalFacturaComponent } from '../modal/modal-factura/modal-factura.component';
import { PorcentajePipe } from 'src/app/pipe/porcentaje.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FacturaComponent,
    ModalFacturaComponent,   
     PorcentajePipe

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class FacturaModule { }
