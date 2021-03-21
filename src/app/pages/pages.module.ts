import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroManagerComponent } from './hero-manager/hero-manager.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from '../store/hero/hero.effects';
import { heroReducer } from '../store/hero/hero.reducers';
import { HeroService } from '../services/hero.service';
import { DataService } from '../services/data.service';
import { ComponentsModule } from '../components/components.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { OperationsCenterComponent } from './operations-center/operations-center.component';
import { RouterModule } from '@angular/router';
import { SearchHeroComponent } from './search-hero/search-hero.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [HeroManagerComponent, OperationsCenterComponent, SearchHeroComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('heroes', heroReducer),
    EffectsModule.forFeature([HeroEffects]),
    ComponentsModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule,
    MatInputModule,
    ComponentsModule
  ],
  exports: [HeroManagerComponent],
  providers: [HeroService, DataService],
})
export class PagesModule {}
