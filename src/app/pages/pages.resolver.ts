import { areHeroesLoaded } from '../store/hero/hero.selectors';
import { loadHeroes, heroesLoaded } from '../store/hero/hero.actions';
import { AppState } from '../store/reducers/index';
import { IHero } from '../models/hero.model';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, tap } from 'rxjs/operators';

@Injectable()
export class PagesResolver implements Resolve<Observable<any>> {
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areHeroesLoaded),
      tap((heroesLoaded) => {
        if (!heroesLoaded) {
          this.store.dispatch(loadHeroes());
        }
      }),
      filter((heroesLoaded) => heroesLoaded),
      first()
    );
  }
}
