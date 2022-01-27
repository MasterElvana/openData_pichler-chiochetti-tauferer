import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentplugsComponent } from './currentplugs.component';

describe('CurrentplugsComponent', () => {
  let component: CurrentplugsComponent;
  let fixture: ComponentFixture<CurrentplugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentplugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentplugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
