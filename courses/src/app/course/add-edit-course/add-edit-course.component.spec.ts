import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCourseComponent } from './add-edit-course.component';

describe('AddEditCourseComponent', () => {
  let component: AddEditCourseComponent;
  let fixture: ComponentFixture<AddEditCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
