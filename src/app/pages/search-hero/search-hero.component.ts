import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IHero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.scss'],
})
export class SearchHeroComponent implements OnInit {
  searchType: string;
  searchForm = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(''),
  });

  heroes: IHero[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.searchType = String(this.activatedRoute.snapshot.queryParams.type);
  }

  searchHero() {
    this.heroes = [];
    if (this.searchType === 'id') {
      this.heroService
        .getHeroById(this.searchForm.value.id)
        .subscribe((resp) => {
          this.heroes = Object.keys(resp).length === 0 ? [] : [...[], resp];
        });
    } else {
      this.heroService
        .getHeroByName(this.searchForm.value.name)
        .subscribe((resp) => {
          this.heroes = resp;
        });
    }
  }
}
