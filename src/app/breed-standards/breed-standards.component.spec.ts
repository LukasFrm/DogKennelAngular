import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedStandardsComponent } from './breed-standards.component';

describe('BreedStandardsComponent', () => {
  let component: BreedStandardsComponent;
  let fixture: ComponentFixture<BreedStandardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedStandardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
