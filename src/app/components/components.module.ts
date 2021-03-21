import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { HeroTableComponent } from './hero-table/hero-table.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteHeroDialogComponent } from './delete-hero-dialog/delete-hero-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { UppercaseInputDirective } from './hero-form/hero-input.directive';


@NgModule({
  declarations: [HeroTableComponent, HeroFormComponent, DeleteHeroDialogComponent, UppercaseInputDirective],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  exports: [HeroTableComponent, UppercaseInputDirective],
  providers: []
})
export class ComponentsModule {}
