import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/Pagomodelo';
import { DataPagos } from 'src/app/data';
import { pagosServices } from 'src/app/pagos.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
  total=0;
  pagos:Pago[]=[];
  constructor(private pagosservices:pagosServices){
    this.pagos=pagosservices.getPagos();
  }
  ngOnInit(): void {

  }






}
