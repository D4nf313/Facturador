import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'porcentaje'
})
export class PorcentajePipe implements PipeTransform {

  transform(value: unknown): unknown {
    if(value == 1){
       return '0%'
    }else if(value == 2){
      return '12%'
   }else if(value == 3){
    return '16%'
 }else{
  return null;
 }

  }

}
