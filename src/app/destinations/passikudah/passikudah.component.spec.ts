import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassikudahComponent } from './passikudah.component';

describe('PassikudahComponent', () => {
  let component: PassikudahComponent;
  let fixture: ComponentFixture<PassikudahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassikudahComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassikudahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
