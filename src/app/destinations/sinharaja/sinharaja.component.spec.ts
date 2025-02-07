import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinharajaComponent } from './sinharaja.component';

describe('SinharajaComponent', () => {
  let component: SinharajaComponent;
  let fixture: ComponentFixture<SinharajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinharajaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinharajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
