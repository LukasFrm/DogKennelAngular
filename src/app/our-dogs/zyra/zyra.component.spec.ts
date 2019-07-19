import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZyraComponent } from './zyra.component';

describe('ZyraComponent', () => {
  let component: ZyraComponent;
  let fixture: ComponentFixture<ZyraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZyraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZyraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
