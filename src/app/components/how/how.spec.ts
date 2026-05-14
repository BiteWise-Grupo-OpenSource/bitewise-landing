import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowComponent } from './how';

describe('HowComponent', () => {
  let component: HowComponent;
  let fixture: ComponentFixture<HowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HowComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
