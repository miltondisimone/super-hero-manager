import { HeroState } from './hero.reducers';
import { IHero } from '../../models/hero.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from './hero.reducers';

export const heroFeatureSelector = createFeatureSelector<HeroState>('heroes');

export const getAllHeroes = createSelector(
  heroFeatureSelector,
  selectAll
);

export const areHeroesLoaded = createSelector(
  heroFeatureSelector,
  state => state.heroesLoaded
);



