import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitulgalaComponent } from './kitulgala.component';

describe('KitulgalaComponent', () => {
  let component: KitulgalaComponent;
  let fixture: ComponentFixture<KitulgalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitulgalaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KitulgalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
