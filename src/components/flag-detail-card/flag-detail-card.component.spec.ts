import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagDetailCardComponent } from './flag-detail-card.component';

describe('FlagDetailCardComponent', () => {
  let component: FlagDetailCardComponent;
  let fixture: ComponentFixture<FlagDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagDetailCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlagDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
