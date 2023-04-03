import { Injectable } from '@angular/core';
import { Pago } from './Pagomodelo';
import { DataPagos } from './data';
import { BehaviorSubject, Observable } from 'rxjs';

 @Injectable({
  providedIn:'root'
 })

 export class pagosServices{

  constructor(){

  }
  getPagos():Pago[]{
    return DataPagos;
  }




 }
