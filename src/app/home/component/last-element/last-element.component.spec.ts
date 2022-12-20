import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastElementComponent } from './last-element.component';

describe('LastElementComponent', () => {
  let component: LastElementComponent;
  let fixture: ComponentFixture<LastElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
