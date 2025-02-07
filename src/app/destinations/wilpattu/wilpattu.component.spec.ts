import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilpattuComponent } from './wilpattu.component';

describe('WilpattuComponent', () => {
  let component: WilpattuComponent;
  let fixture: ComponentFixture<WilpattuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WilpattuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WilpattuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
