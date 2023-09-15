import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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
      //this.digimones = this.digimones.concat(resultado.content);  //Con el concat se ira cargando datos para abajo
      this.digimones = resultado.content;
      console.log(this.digimones)
    });

    /*
    this.httpClient.get<any>("https://rickandmortyapi.com/api/character").subscribe(resultado => {
      this.personajes = resultado.results
      console.log(this.personajes)
    });
    */
   this.mensajeToast()
  }

  cargarMasData() {
    this.paginaActual++;
    const url = `https://www.digi-api.com/api/v1/digimon?page=${this.paginaActual}`
    this.httpClient.get<any>(url).subscribe(resultado => {
      this.digimones = this.digimones.concat(resultado.content);  //Con el concat se ira cargando datos para abajo
      console.log(this.digimones)
    });
    this.mensajeToast()
  }

  cargarSiguientePagina() {
    this.paginaActual++;
    this.cargarData();
  }

  cargarAnteriorPagina() {
    this.paginaActual--;
    this.cargarData();
  }

  mensajeToast() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Carga exitosa!'
    })
  }

  mensaje(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      heightAuto: false,
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
}
