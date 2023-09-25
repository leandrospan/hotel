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
    "ordemdepreco" : "altobaixo",
    "preco" : {
      "lower" : "5",
      "upper" : "10",
    }
  }

  constructor() { }

  tipoCarneChange(ev : any){
    console.log(ev.detail.value);
    const tipo = ev.detail.value;
    this.filtros.tipo_carne = tipo;
  }

  tipoCozinhaChange(ev : any){
    console.log(ev.detail.value);
    const tipo = ev.detail.value;
    this.filtros.cozinha = tipo;
  }

  tipoDistanciaChange(ev : any){
    console.log(ev.detail.value);
    const tipo = ev.detail.value;
    this.filtros.distancia = tipo;
  }

  tipoPopularChange(ev : any){
    console.log(ev.detail.value);
    const tipo = ev.detail.value;
    this.filtros.popular = tipo;
  }

  tipoOrdemPrecoChange(ev : any){
    console.log(ev.detail.value);
    const tipo = ev.detail.value;
    this.filtros.ordemdepreco = tipo;
  }

  tipoPrecoChange(ev : any){
    console.log(ev.detail.value);
    const tipo = ev.detail.value;
    this.filtros.preco.lower = tipo.lower;
    this.filtros.preco.upper = tipo.upper;
    console.log(this.filtros.preco.lower);
    console.log(this.filtros.preco.upper);
  }

  reset(){
    this.filtros = {
      "tipo_carne" : "almoco",
      "cozinha" : "indiana",
      "distancia" : 5,
      "popular" : true,
      "ordemdepreco" : "altobaixo",
      "preco" : {
        "lower" : "5",
        "upper" : "10",
      }
    }
  }

  aplicarFiltros(){
    console.log(this.filtros);
  }

  ngOnInit() {
  }

}
