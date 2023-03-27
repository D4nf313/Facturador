import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacturaHistorialService {
   data = new BehaviorSubject<any>({});

  datos: any[] = [];

  envioFactura(facturaTotal: any) {
    console.log('click');
    this.datos.push(facturaTotal);

    this.data.next(this.datos);
  }

  reciboFactura() {
    console.log('pase por aca');
    return this.data.asObservable();
  }
  constructor() {}
}
