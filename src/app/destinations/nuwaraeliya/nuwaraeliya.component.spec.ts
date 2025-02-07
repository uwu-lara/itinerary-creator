import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuwaraeliyaComponent } from './nuwaraeliya.component';

describe('NuwaraeliyaComponent', () => {
  let component: NuwaraeliyaComponent;
  let fixture: ComponentFixture<NuwaraeliyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuwaraeliyaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuwaraeliyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
