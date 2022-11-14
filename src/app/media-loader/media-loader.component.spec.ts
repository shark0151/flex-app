import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaLoaderComponent } from './media-loader.component';

describe('MediaLoaderComponent', () => {
  let component: MediaLoaderComponent;
  let fixture: ComponentFixture<MediaLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
