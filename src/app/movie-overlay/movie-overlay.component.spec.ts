import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieOverlayComponent } from './movie-overlay.component';

describe('MovieOverlayComponent', () => {
  let component: MovieOverlayComponent;
  let fixture: ComponentFixture<MovieOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
