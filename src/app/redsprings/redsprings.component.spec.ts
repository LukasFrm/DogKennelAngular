import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedspringsComponent } from './redsprings.component';

describe('RedspringsComponent', () => {
  let component: RedspringsComponent;
  let fixture: ComponentFixture<RedspringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedspringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedspringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
