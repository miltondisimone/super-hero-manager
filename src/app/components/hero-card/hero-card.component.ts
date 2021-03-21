import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
  @Input() editable = true;

  @Input() hero: IHero;

  @Output() editHero = new EventEmitter();

  @Output() deleteHero = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickEdit(hero: IHero) {
    this.editHero.emit(hero)
  }

  clickDelete(id: string) {
    this.deleteHero.emit(id);
  }

}
