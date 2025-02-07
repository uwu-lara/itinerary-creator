import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaffnaComponent } from './jaffna.component';

describe('JaffnaComponent', () => {
  let component: JaffnaComponent;
  let fixture: ComponentFixture<JaffnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JaffnaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JaffnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
