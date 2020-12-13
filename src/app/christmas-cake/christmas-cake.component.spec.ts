import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasCakeComponent } from './christmas-cake.component';

describe('ChristmasCakeComponent', () => {
  let component: ChristmasCakeComponent;
  let fixture: ComponentFixture<ChristmasCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristmasCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristmasCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
