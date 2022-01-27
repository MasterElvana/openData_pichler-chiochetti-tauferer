import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentstationComponent } from './currentstation.component';

describe('CurrentstationComponent', () => {
  let component: CurrentstationComponent;
  let fixture: ComponentFixture<CurrentstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentstationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
