import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HeroeInterface} from "../../servicios/heroes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.scss']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: HeroeInterface;
  @Input() index: number | undefined;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(
    private router: Router
  ) {
    this.heroe = {
      aparicion: 'desconocido',
      bio: 'desconocido',
      casa: 'desconocido',
      img: 'desconocido',
      nombre: 'desconocido'
    }
    this.heroeSeleccionado = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  verHeroe(): void {
    this.router.navigate(['/heroe', this.index]);
    // this.heroeSeleccionado.emit(this.index);
  }

}
