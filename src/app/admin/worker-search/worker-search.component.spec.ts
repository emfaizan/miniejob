import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerSearchComponent } from './worker-search.component';

describe('WorkerSearchComponent', () => {
  let component: WorkerSearchComponent;
  let fixture: ComponentFixture<WorkerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
