import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsterComponent } from './tipster.component';

describe('TipsterComponent', () => {
  let component: TipsterComponent;
  let fixture: ComponentFixture<TipsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
