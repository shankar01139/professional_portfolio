import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPortfolioLayoutComponent } from './main-portfolio-layout.component';

describe('MainPortfolioLayoutComponent', () => {
  let component: MainPortfolioLayoutComponent;
  let fixture: ComponentFixture<MainPortfolioLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPortfolioLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPortfolioLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
