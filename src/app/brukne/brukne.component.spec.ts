import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrukneComponent } from './brukne.component';

describe('BrukneComponent', () => {
  let component: BrukneComponent;
  let fixture: ComponentFixture<BrukneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrukneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrukneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
