import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagInventoryPageComponent } from './flag-inventory-page.component';

describe('FlagInventoryPageComponent', () => {
  let component: FlagInventoryPageComponent;
  let fixture: ComponentFixture<FlagInventoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagInventoryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlagInventoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
