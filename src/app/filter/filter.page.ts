import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  filtros = {
    "tipo_carne" : "almoco",
    "cozinha" : "indiana",
    "distancia" : 5,
    "popular" : true,
    "ordemdepreco" : 'altobaixo',
    "preco" : {
      "precoBaixo" : "5",
      "precoAlto" : "10",
    }
  }

  constructor() { }

  tipoCarneChange(ev : any){
    console.log(ev.detail.value);
    const tipo = ev.detail.value;
    this.filtros.tipo_carne = tipo;
  }

  ngOnInit() {
  }

}
