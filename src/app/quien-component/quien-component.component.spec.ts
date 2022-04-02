import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienComponentComponent } from './quien-component.component';

describe('QuienComponentComponent', () => {
  let component: QuienComponentComponent;
  let fixture: ComponentFixture<QuienComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
