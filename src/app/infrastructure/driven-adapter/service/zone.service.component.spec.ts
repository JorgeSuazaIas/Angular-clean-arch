import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zone.ServiceComponent } from './zone.service.component';

describe('Zone.ServiceComponent', () => {
  let component: Zone.ServiceComponent;
  let fixture: ComponentFixture<Zone.ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zone.ServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zone.ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
