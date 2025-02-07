import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalpitiyaComponent } from './kalpitiya.component';

describe('KalpitiyaComponent', () => {
  let component: KalpitiyaComponent;
  let fixture: ComponentFixture<KalpitiyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KalpitiyaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KalpitiyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
