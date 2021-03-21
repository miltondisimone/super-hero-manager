import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IHero } from 'src/app/models/hero.model';
import { MatDialog } from '@angular/material/dialog';
import { getAllHeroes } from 'src/app/store/hero/hero.selectors';
import {
  createHero,
  deleteHero,
  heroActionTypes,
  updateHero,
} from '../../store/hero/hero.actions';
import { v4 as uuidv4 } from 'uuid';
import { HeroFormComponent } from 'src/app/components/hero-form/hero-form.component';
import { Update } from '@ngrx/entity';
import { DeleteHeroDialogComponent } from 'src/app/components/delete-hero-dialog/delete-hero-dialog.component';

@Component({
  selector: 'app-hero-manager',
  templateUrl: './hero-manager.component.html',
  styleUrls: ['./hero-manager.component.scss'],
})
export class HeroManagerComponent implements OnInit {
  heroes$: Observable<IHero[]>;
  heroes: IHero[];
  filteredList: IHero[];

  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.heroes$ = this.store.select(getAllHeroes);
    this.heroes$.subscribe((resp) => {
      this.heroes = resp;
    });
  }

  openHeroForm(hero?: IHero) {
    const dialogRef = this.dialog.open(HeroFormComponent);
    if (hero) dialogRef.componentInstance.hero = hero;

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== 'dismiss') {
        const hero = result as IHero;
        if (hero.id) {
          const update: Update<IHero> = {
            id: hero.id,
            changes: {
              ...hero,
              name: hero.name,
              origin: hero.origin,
            },
          };

          this.store.dispatch(heroActionTypes.updateHero({ update }));
        } else {
          hero.id = uuidv4();
          this.store.dispatch(createHero({ hero }));
        }
      }
    });
  }

  openDeleteDialog(id: string) {
    const dialogRef = this.dialog.open(DeleteHeroDialogComponent);

    const heroId = id;
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== 'dismiss') {
        this.store.dispatch(deleteHero({ heroId }));
      }
    });
  }

  filterList(value: string) {
    this.filteredList = value
      ? this.heroes.filter(
          (hero) => hero.name.includes(value) || hero.origin.includes(value)
        )
      : null;
  }
}
