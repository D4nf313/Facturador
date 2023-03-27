import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FacturaProducto } from '../../interfaces/facturaproducto.interface';

@Component({
  selector: 'app-modal-factura',
  templateUrl: './modal-factura.component.html',
  styleUrls: ['./modal-factura.component.css'],
})
export class ModalFacturaComponent implements OnInit {
  @Output() producto: EventEmitter<FacturaProducto[]> = new EventEmitter<
    FacturaProducto[]
  >();

  constructor(private modalService: NgbModal, private fb: FormBuilder) {}

  myForm!: FormGroup;
  registroP: any = {};

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],

      description: [''],
      cantidad: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      precioU: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      iva: ['1', Validators.required],
      totalsinIVA: [],
      totalIVA: [],
      total: [],
    });
  }

  calcularTotal() {
    let cantidad = this.myForm.get('cantidad')?.value;
    let precioU = this.myForm.get('precioU')?.value;
    let ivaconprecio = 0;

    let totalsiniva = cantidad * precioU;
    let totalconiva;
    this.myForm.get('totalsinIVA')?.setValue(totalsiniva);
    let iva = 0;
    let selected = this.myForm.get('iva')?.value;

    if (selected === '2') {
      iva = 0.12;
      ivaconprecio = totalsiniva * iva;
      totalconiva = totalsiniva + ivaconprecio;

      this.myForm.get('total')?.setValue(totalconiva);
      this.myForm.get('totalIVA')?.setValue(ivaconprecio);
    } else if (selected === '3') {
      iva = 0.16;
      ivaconprecio = totalsiniva * iva;
      totalconiva = totalsiniva + ivaconprecio;

      this.myForm.get('total')?.setValue(totalconiva);
      this.myForm.get('totalIVA')?.setValue(ivaconprecio);
    } else {
      this.myForm.get('total')?.setValue(totalsiniva);
      ivaconprecio = totalsiniva;
      this.myForm.get('totalIVA')?.setValue(ivaconprecio);
    }
  }

  enviarInfo() {
    this.calcularTotal();

    this.registroP = this.myForm.value;

    this.producto.emit(this.registroP);
    this.modalService.dismissAll();
  }
}
