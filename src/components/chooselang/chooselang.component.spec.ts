import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooselangComponent } from './chooselang.component';

describe('ChooselangComponent', () => {
  let component: ChooselangComponent;
  let fixture: ComponentFixture<ChooselangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooselangComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooselangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
