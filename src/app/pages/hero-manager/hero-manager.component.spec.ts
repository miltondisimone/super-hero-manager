import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroManagerComponent } from './hero-manager.component';

describe('HeroManagerComponent', () => {
  let component: HeroManagerComponent;
  let fixture: ComponentFixture<HeroManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
