import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDiscountComponent } from './top-discount.component';

describe('TopDiscountComponent', () => {
  let component: TopDiscountComponent;
  let fixture: ComponentFixture<TopDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
