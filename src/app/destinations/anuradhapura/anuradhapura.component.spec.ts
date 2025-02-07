import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuradhapuraComponent } from './anuradhapura.component';

describe('AnuradhapuraComponent', () => {
  let component: AnuradhapuraComponent;
  let fixture: ComponentFixture<AnuradhapuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnuradhapuraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnuradhapuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
