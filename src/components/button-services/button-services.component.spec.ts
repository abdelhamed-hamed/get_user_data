import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonServicesComponent } from './button-services.component';

describe('ButtonServicesComponent', () => {
  let component: ButtonServicesComponent;
  let fixture: ComponentFixture<ButtonServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
