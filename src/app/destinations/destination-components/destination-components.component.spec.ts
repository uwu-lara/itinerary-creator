import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationComponentsComponent } from './destination-components.component';

describe('DestinationComponentsComponent', () => {
  let component: DestinationComponentsComponent;
  let fixture: ComponentFixture<DestinationComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestinationComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
