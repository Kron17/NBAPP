import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {

  digimones: any[] = [];
  personajes: any[] = [];

  paginaActual = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.cargarData();
  }

  cargarData() {
    const url = `https://www.digi-api.com/api/v1/digimon?page=${this.paginaActual}`
    this.httpClient.get<any>(url).subscribe(resultado => {
      //console.log(resultado);
      //console.log(resultado.content);
      //this.digimones = this.digimones.concat(resultado.content);  Con el concat se ira cargando datos para abajo
      this.digimones = resultado.content;
      console.log(this.digimones)
    });

    /*
    this.httpClient.get<any>("https://rickandmortyapi.com/api/character").subscribe(resultado => {
      this.personajes = resultado.results
      console.log(this.personajes)
    });
    */
  }

  cargarSiguientePagina() {
    this.paginaActual++;
    this.cargarData();
  }

  cargarAnteriorPagina() {
    this.paginaActual--;
    this.cargarData();
  }

}
