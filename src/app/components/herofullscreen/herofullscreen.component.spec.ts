import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerofullscreenComponent } from './herofullscreen.component';

describe('HerofullscreenComponent', () => {
  let component: HerofullscreenComponent;
  let fixture: ComponentFixture<HerofullscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerofullscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerofullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
