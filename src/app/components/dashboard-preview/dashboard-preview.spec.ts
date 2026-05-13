import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPreviewComponent } from './dashboard-preview';

describe('DashboardPreviewComponent', () => {
  let component: DashboardPreviewComponent;
  let fixture: ComponentFixture<DashboardPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPreviewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
