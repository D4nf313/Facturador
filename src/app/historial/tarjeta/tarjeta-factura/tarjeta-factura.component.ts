import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-factura',
  templateUrl: './tarjeta-factura.component.html',
  styleUrls: ['./tarjeta-factura.component.css']
})
export class TarjetaFacturaComponent implements OnInit {
  @Input() factura = {nameClient:'',
                      documento:'',
                    direccion:'',
                  productos:[]    };
    productos:any;
  constructor() { }

  ngOnInit(): void {
     this.productos=this.factura.productos
    console.log('h')

  }

}
