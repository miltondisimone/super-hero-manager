import { IHero } from './../models/hero.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable()
export class DataService {
  constructor() {
    if (!localStorage.getItem('heroes')?.length) {
      const defaultHeroes = [
        { id: uuidv4(), name: 'BATMAN', origin: 'GOTHAM' },
        { id: uuidv4(), name: 'ROBIN', origin: 'GOTHAM' },
      ];
      localStorage.setItem('heroes', JSON.stringify(defaultHeroes));
    }
  }

  getHeroById(id: string): Observable<IHero> {
    return new Observable<IHero>((observer) => {
      const hero = JSON.parse(localStorage.getItem('heroes')).find(
        (hero) => hero.id === id
      );
      observer.next(hero || {});
      observer.complete();
    });
  }

  getHeroByName(name: string): Observable<IHero[]> {
    return new Observable<IHero[]>((observer) => {
      const heroes = JSON.parse(localStorage.getItem('heroes')).filter((hero) =>
        hero.name.includes(name)
      );
      observer.next(heroes || []);
      observer.complete();
    });
  }

  getAllHeroes(): Observable<IHero[]> {
    return new Observable<IHero[]>((observer) => {
      const heroes = JSON.parse(localStorage.getItem('heroes'));
      observer.next(heroes);
      observer.complete();
    });
  }

  createHero(hero: IHero): Observable<IHero> {
    return new Observable<IHero>((observer) => {
      let currentHeroes = JSON.parse(localStorage.getItem('heroes'));
      currentHeroes = [...currentHeroes, hero];
      localStorage.setItem('heroes', JSON.stringify(currentHeroes));
      observer.next(hero);
      observer.complete();
    });
  }

  deleteHero(heroId: string): Observable<string> {
    return new Observable<string>((observer) => {
      let heroRemoved = JSON.parse(localStorage.getItem('heroes')).filter(
        (hero) => hero.id !== heroId
      );
      localStorage.setItem('heroes', JSON.stringify(heroRemoved));
      observer.next(heroId);
      observer.complete();
    });
  }

  updateHero(heroId: string, changes: Partial<IHero>): Observable<IHero[]> {
    return new Observable<IHero[]>((observer) => {
      const heroes = JSON.parse(localStorage.getItem('heroes'));
      let updatedHeroIndex = heroes.findIndex((hero) => hero.id === heroId);

      heroes[updatedHeroIndex] = {
        id: heroId,
        name: changes.name,
        origin: changes.origin,
      };

      localStorage.setItem('heroes', JSON.stringify(heroes));
      observer.next(heroes[updatedHeroIndex]);
      observer.complete();
    });
  }
}
