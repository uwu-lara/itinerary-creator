import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigiriyaComponent } from './sigiriya.component';

describe('SigiriyaComponent', () => {
  let component: SigiriyaComponent;
  let fixture: ComponentFixture<SigiriyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigiriyaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SigiriyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
