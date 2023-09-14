import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Input() mostrarHeader: boolean = true;
  @Input() mostrarBoton: boolean = false;

  @Input() titulo!: string;
  @Input() fecha!: string;
  @Input() descripcion!: string;
  @Input() cantidad!: number;

  timesArray(n: number): any[] {
    return Array(n);
  }
  
  constructor(private router: Router) { }

  ngOnInit() {}

  detalle() {
    this.router.navigate(['/jugadores']);
  }
}
