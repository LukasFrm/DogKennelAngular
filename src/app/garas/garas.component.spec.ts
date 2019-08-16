import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarasComponent } from './garas.component';

describe('GarasComponent', () => {
  let component: GarasComponent;
  let fixture: ComponentFixture<GarasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
