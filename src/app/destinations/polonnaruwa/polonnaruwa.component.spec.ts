import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolonnaruwaComponent } from './polonnaruwa.component';

describe('PolonnaruwaComponent', () => {
  let component: PolonnaruwaComponent;
  let fixture: ComponentFixture<PolonnaruwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolonnaruwaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolonnaruwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
