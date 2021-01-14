import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroeInterface} from "../../servicios/heroes.service";
import {HeroesService} from "../../servicios/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  public heroe: HeroeInterface;
  public srcImg: string;
  private SRC_IMG: string[] = ['./assets/img/marvel-logo.png', './assets/img/dc-logo.png'];

  constructor(
    private activateRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.heroe = {
      aparicion: 'desconocido',
      bio: 'desconocido',
      casa: 'desconocido',
      img: 'desconocido',
      nombre: 'desconocido'
    }
    this.srcImg = '';
    this.activateRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      this.srcImg = this.srcLogoImg(this.heroe.casa);
    })
  }

  private srcLogoImg(casa: string) {
    let retorno: string;
    if (casa === 'Marvel') {
      retorno = this.SRC_IMG[0];
    } else {
      retorno = this.SRC_IMG[1];
    }
    return retorno;
  }

  ngOnInit(): void {
  }

}
