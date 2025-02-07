import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegomboComponent } from './negombo.component';

describe('NegomboComponent', () => {
  let component: NegomboComponent;
  let fixture: ComponentFixture<NegomboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegomboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NegomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
