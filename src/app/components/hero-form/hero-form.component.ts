import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IHero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  heroForm = new FormGroup({
    name: new FormControl('', Validators.required),
    origin: new FormControl('', Validators.required),
    id: new FormControl({value: '', disabled: true}),
  });

  @Input() hero: IHero;

  constructor(public dialogRef: MatDialogRef<HeroFormComponent>) {}

  ngOnInit(): void {
    if (this.hero) {
      this.heroForm.patchValue({
        id: this.hero.id,
        name: this.hero.name,
        origin: this.hero.origin,
      });
    }
  }

  dismiss(): void {
    this.dialogRef.close('dismiss');
  }

  save() {
    this.dialogRef.close(this.heroForm.getRawValue());
  }
}
