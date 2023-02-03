import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User.ServiceComponent } from './user.service.component';

describe('User.ServiceComponent', () => {
  let component: User.ServiceComponent;
  let fixture: ComponentFixture<User.ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User.ServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User.ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
