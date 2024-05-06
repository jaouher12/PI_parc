import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marketing2Component } from './marketing2.component';

describe('Marketing2Component', () => {
  let component: Marketing2Component;
  let fixture: ComponentFixture<Marketing2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marketing2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Marketing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
