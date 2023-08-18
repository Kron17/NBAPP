import { Injectable } from '@angular/core';
import { Jugador } from '../pages/jugadores/jugadores.model';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  jugadores: Jugador[] = [
    {
      id: '1',
      nombre: 'Koby Bryant',
      imagen: 'https://media1.s-nbcnews.com/i/newscms/2020_05/3204601/200128-kobe-bryant-cover-section-tease_9326f5e3d9c4f505b6717711564bdba1.jpg',
      fecha: '1978 - 2020',
      descripcion: 'AAA',
    },
    {
      id: '2',
      nombre: 'Shaquille ONeal',
      imagen: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20201003214308/shaquille-oneal-lakers-740x600.jpg',
      fecha: '2023',
      descripcion: 'BBB',
    },
    {
      id: '3',
      nombre: 'Tracy McGrady',
      imagen: 'https://static.wixstatic.com/media/36f47e_51bbb5ec3e7d44cab9ded96d412e7731~mv2.jpg/v1/fill/w_600,h_534,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/36f47e_51bbb5ec3e7d44cab9ded96d412e7731~mv2.jpg',
      fecha: '2023',
      descripcion: 'CCC',
    },
  ]

  constructor() { }

  // METODOS CUSTOM
  // METODO QUE DEVUELVE OBJETO COMPLETO
  getAll() {
    return [...this.jugadores]
  }

  //METODO QUE DEVUELVE UN JUGADOR POR EL ID BUSCADO
  getJugador(id: string) {
    return {
      ...this.jugadores.find( aux => {
        return aux.id === id
      }
        )
    }
  }
}
