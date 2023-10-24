import {Component} from '@angular/core';
import {Hero} from '../hero'
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  heroes = HEROES;

  foo(name:string) {
    console.log(name)
  }
}
