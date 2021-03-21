import { IHero } from './../models/hero.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from './data.service';

@Injectable()
export class HeroService {
  constructor(private dataService: DataService) {}

  getHeroById(id: string): Observable<IHero> {
    return this.dataService.getHeroById(id);
  }

  getHeroByName(name: string): Observable<IHero[]> {
    return this.dataService.getHeroByName(name);
  }

  getAllHeroes(): Observable<IHero[]> {
    return this.dataService.getAllHeroes();
  }

  createHero(hero: IHero): Observable<IHero> {
    return this.dataService.createHero(hero);
  }

  deleteHero(heroId: string): Observable<any> {
    return this.dataService.deleteHero(heroId);
  }

  updateHero(
    heroId: string,
    changes: Partial<IHero>
  ): Observable<any> {
    return this.dataService.updateHero(heroId, changes);
  }
}
