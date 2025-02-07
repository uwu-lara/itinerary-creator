import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KandyComponent } from './kandy.component';

describe('KandyComponent', () => {
  let component: KandyComponent;
  let fixture: ComponentFixture<KandyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KandyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KandyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
