import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrincomaleeComponent } from './trincomalee.component';

describe('TrincomaleeComponent', () => {
  let component: TrincomaleeComponent;
  let fixture: ComponentFixture<TrincomaleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrincomaleeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrincomaleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
