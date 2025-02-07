import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColomboComponent } from './colombo.component';

describe('ColomboComponent', () => {
  let component: ColomboComponent;
  let fixture: ComponentFixture<ColomboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColomboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
