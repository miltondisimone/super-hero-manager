import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHeroDialogComponent } from './delete-hero-dialog.component';

describe('DeleteHeroDialogComponent', () => {
  let component: DeleteHeroDialogComponent;
  let fixture: ComponentFixture<DeleteHeroDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHeroDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHeroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
