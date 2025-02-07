import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnawatunaComponent } from './unawatuna.component';

describe('UnawatunaComponent', () => {
  let component: UnawatunaComponent;
  let fixture: ComponentFixture<UnawatunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnawatunaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnawatunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
