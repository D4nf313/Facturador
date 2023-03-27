import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FacturaHistorialService } from 'src/app/services/factura-historial.service';
import { FacturaProducto } from '../interfaces/facturaproducto.interface';
import { ModalFacturaComponent } from '../modal/modal-factura/modal-factura.component';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
})
export class FacturaComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private facturaService: FacturaHistorialService
  ) {}
  registroP: FacturaProducto[] = [];
  myForm!: FormGroup;
  totalFactura: number = 0;
  banderTable: boolean = false;
  facturaProductos = { productos: this.registroP };
  facturaTotal = {};

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nameClient: ['', Validators.required],
      documento: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  openModal() {
    var modalRef = this.modalService.open(ModalFacturaComponent, {
      size: 'lg',
      ariaLabelledBy: 'modal-basic-title',
    });
    modalRef.componentInstance.producto.subscribe((data: any) => {
      this.registroP.push(data);
      this.calcularTotal(data.total);
      this.banderTable = true;
    });
  }

  calcularTotal(data: number) {
    this.totalFactura += data;
  }

  enviarFactura() {
    console.log('factura')
    this.facturaTotal = Object.assign(this.facturaProductos, this.myForm.value);
    console.log(this.facturaTotal)
    this.facturaService.envioFactura(this.facturaTotal);
  }
}
