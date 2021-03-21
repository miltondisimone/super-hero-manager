import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IHero } from '../../models/hero.model';
import { createReducer, on } from '@ngrx/store';
import { heroActionTypes, heroesLoaded } from './hero.actions';

export interface HeroState extends EntityState<IHero> {
    heroesLoaded: boolean;
}

export const adapter: EntityAdapter<IHero> = createEntityAdapter<IHero>();

export const initialState = adapter.getInitialState({
    heroesLoaded: false
});

export const heroReducer = createReducer(
  initialState,

  on(heroActionTypes.heroesLoaded, (state, action) => {
    return adapter.setAll(
      action.heroes,
      {...state, heroesLoaded: true}
    );
  }),

  on(heroActionTypes.createHero, (state, action) => {
    return adapter.addOne(action.hero, state);
  }),

  on(heroActionTypes.deleteHero, (state, action) => {
    return adapter.removeOne(action.heroId, state);
  }),

  on(heroActionTypes.updateHero, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
