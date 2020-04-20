import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksiteComponent } from './worksite.component';

describe('WorksiteComponent', () => {
  let component: WorksiteComponent;
  let fixture: ComponentFixture<WorksiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
