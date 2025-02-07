import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdawalaweComponent } from './udawalawe.component';

describe('UdawalaweComponent', () => {
  let component: UdawalaweComponent;
  let fixture: ComponentFixture<UdawalaweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UdawalaweComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UdawalaweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
