import { IHero } from '../../models/hero.model';
import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';


export const loadHeroes = createAction(
  '[Heroes List] Load Heroes via Service',
);

export const heroesLoaded = createAction(
  '[Heroes Effect] Heroes Loaded Successfully',
  props<{heroes: IHero[]}>()
);

export const createHero = createAction(
  '[Create Hero Component] Create Hero',
  props<{hero: IHero}>()
);

export const deleteHero = createAction(
  '[Heroes List Operations] Delete Hero',
  props<{heroId: string}>()
);

export const updateHero = createAction(
  '[Heroes List Operations] Update Hero',
  props<{update: Update<IHero>}>()
);

export const heroActionTypes = {
  loadHeroes,
  heroesLoaded,
  createHero,
  deleteHero,
  updateHero
};


