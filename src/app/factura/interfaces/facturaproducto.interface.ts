export interface FacturaProducto{
    name: string;
    description: number;
    cantidad?:number;
    precioU:number;
    iva:number;
    total:number;
    totalIVA:number;
    totalsinIVA:number;

}