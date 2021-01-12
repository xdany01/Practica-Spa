import {Component, OnInit} from '@angular/core';
import {HeroeInterface, HeroesService} from "../../servicios/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public heroes: HeroeInterface[] = [];

  constructor(
    private _heroesService: HeroesService
  ) {
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHerores();
  }

}
