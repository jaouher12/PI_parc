import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manager2Component } from './manager2.component';

describe('Manager2Component', () => {
  let component: Manager2Component;
  let fixture: ComponentFixture<Manager2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Manager2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Manager2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
