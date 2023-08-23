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
      descripcion: 'Kobe Bean Bryant ​fue un baloncestista estadounidense que jugaba en la posición de escolta. Disputó veinte temporadas en la NBA, todas ellas en Los Angeles Lakers. Hijo del exjugador de baloncesto Joe Bryant, ​está considerado como uno de los mejores baloncestistas de todos los tiempos.',
    },
    {
      id: '2',
      nombre: 'Shaquille ONeal',
      imagen: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20201003214308/shaquille-oneal-lakers-740x600.jpg',
      fecha: '2023',
      descripcion: 'Shaquille Rashaun O’Neal es un exjugador estadounidense de baloncesto, que se desempeñaba como pívot.​ Es considerado como uno de los jugadores más dominantes de la historia de la NBA.',
    },
    {
      id: '3',
      nombre: 'Tracy McGrady',
      imagen: 'https://static.wixstatic.com/media/36f47e_51bbb5ec3e7d44cab9ded96d412e7731~mv2.jpg/v1/fill/w_600,h_534,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/36f47e_51bbb5ec3e7d44cab9ded96d412e7731~mv2.jpg',
      fecha: '2023',
      descripcion: 'Tracy Lamar McGrady Jr, nacido el 24 de mayo de 1979 en Bartow, Florida, es un exjugador de baloncesto que disputó 15 temporadas en la NBA. Con 2,03 metros podía jugar tanto de alero como de escolta. McGrady entró en la NBA directamente desde el instituto, sin pasar por la universidad.',
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

  //METODO QUE AGREGA UN JUGADOR
  addJugador(nombre: string, imagen: string, fecha: string, descripcion: string) {
    this.jugadores.push({
      nombre, imagen, fecha, descripcion, id: this.jugadores.length + 1 + ""
    })
  }

  //METODO QUE ELIMINA UN JUGADOR POR EL ID
  deleteJugador(id: string) {
    this.jugadores = this.jugadores.filter(aux => {
      return aux.id !== id
    })
  }
}
