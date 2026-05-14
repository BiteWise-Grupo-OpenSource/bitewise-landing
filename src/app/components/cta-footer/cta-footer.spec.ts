import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaFooterComponent } from './cta-footer';

describe('CtaFooterComponent', () => {
  let component: CtaFooterComponent;
  let fixture: ComponentFixture<CtaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CtaFooterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
