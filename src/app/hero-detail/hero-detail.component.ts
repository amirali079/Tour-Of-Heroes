import {Hero} from '../hero';
import {Component, Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
  @Output() public test: EventEmitter<string> = new EventEmitter<string>()

  public onClock() {
    this.test.emit("amirali")
  }
}
