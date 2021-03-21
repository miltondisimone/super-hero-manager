import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroManagerComponent } from './pages/hero-manager/hero-manager.component';
import { OperationsCenterComponent } from './pages/operations-center/operations-center.component';
import { PagesResolver } from './pages/pages.resolver';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';

const routes: Routes = [
  {
    path: 'operations-center',
    component: OperationsCenterComponent
  },
  {
    path: 'search-hero',
    component: SearchHeroComponent
  },
  {
    path: 'hero-manager',
    component: HeroManagerComponent,
    resolve: {
      heroes: PagesResolver,
    },
  },
  { path: '**', pathMatch: 'full', redirectTo: 'operations-center' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
