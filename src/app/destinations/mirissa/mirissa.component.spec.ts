import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirissaComponent } from './mirissa.component';

describe('MirissaComponent', () => {
  let component: MirissaComponent;
  let fixture: ComponentFixture<MirissaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MirissaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MirissaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
