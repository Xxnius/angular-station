import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsformComponent } from './stationsform.component';

describe('StationsformComponent', () => {
  let component: StationsformComponent;
  let fixture: ComponentFixture<StationsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationsformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
