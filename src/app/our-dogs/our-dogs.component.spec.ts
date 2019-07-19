import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDogsComponent } from './our-dogs.component';

describe('OurDogsComponent', () => {
  let component: OurDogsComponent;
  let fixture: ComponentFixture<OurDogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurDogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
