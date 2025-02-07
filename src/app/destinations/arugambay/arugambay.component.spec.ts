import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArugambayComponent } from './arugambay.component';

describe('ArugambayComponent', () => {
  let component: ArugambayComponent;
  let fixture: ComponentFixture<ArugambayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArugambayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArugambayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
