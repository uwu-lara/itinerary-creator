import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YalaComponent } from './yala.component';

describe('YalaComponent', () => {
  let component: YalaComponent;
  let fixture: ComponentFixture<YalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YalaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
