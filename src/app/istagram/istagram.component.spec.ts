import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstagramComponent } from './istagram.component';

describe('IstagramComponent', () => {
  let component: IstagramComponent;
  let fixture: ComponentFixture<IstagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
