import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HambanthotaComponent } from './hambanthota.component';

describe('HambanthotaComponent', () => {
  let component: HambanthotaComponent;
  let fixture: ComponentFixture<HambanthotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HambanthotaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HambanthotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
