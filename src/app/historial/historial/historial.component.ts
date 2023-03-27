import { Component, OnInit } from '@angular/core';
import { FacturaHistorialService } from 'src/app/services/factura-historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent implements OnInit {
  constructor(private facturaService: FacturaHistorialService) {}

  public factura?: any[];
  facturaWard:boolean=false;;

  ngOnInit(): void {
 
    this.facturaService.reciboFactura().subscribe((data) => {  
     
      console.log('llego los datos')

      if(data){
         localStorage.setItem('factura', JSON.stringify(data)); 
         this.facturaWard=true;

      if (this.facturaWard) {
      console.log('ward')
      const facturaGuardada= localStorage.getItem('factura');
      this.factura = JSON.parse(facturaGuardada!);
    console.log(this.factura)
    }
      }else{
        console.log('no se recibieron datos')
      }
     


    });   
    console.log(this.factura)

  }
}
