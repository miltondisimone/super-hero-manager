import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { IHero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.scss'],
})
export class HeroTableComponent implements OnInit {
  @Input() displayedColumns = ['name', 'origin', 'options'];

  @Input() dataSource: IHero[];

  @Output() edit = new EventEmitter();

  @Output() delete = new EventEmitter();

  page = 0;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    if(this.dataSource.length < 6) {
      this.page = 0;
    }
  }

  editHero(hero: IHero) {
    this.edit.emit(hero);
  }

  deleteHero(id: string) {
    this.delete.emit(id);
  }

  pageChange($event) {
    console.log($event)
  }
}
