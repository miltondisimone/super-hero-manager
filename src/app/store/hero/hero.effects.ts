import { heroActionTypes, heroesLoaded, updateHero } from './hero.actions';
import { HeroService } from '../../services/hero.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class HeroEffects {

  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroActionTypes.loadHeroes),
      concatMap(() => this.heroService.getAllHeroes()),
      map(heroes => heroActionTypes.heroesLoaded({heroes}))
    )
  );

  createHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroActionTypes.createHero),
      concatMap((action) => this.heroService.createHero(action.hero)),
      tap(() => this.router.navigateByUrl('/hero-manager'))
    ),
    {dispatch: false}
  );

  deleteHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroActionTypes.deleteHero),
      concatMap((action) => this.heroService.deleteHero(action.heroId))
    ),
    {dispatch: false}
  );

  updateHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroActionTypes.updateHero),
      concatMap((action) => this.heroService.updateHero(String(action.update.id), action.update.changes))
    ),
    {dispatch: false}
  );

  constructor(private heroService: HeroService, private actions$: Actions, private router: Router) {}
}
