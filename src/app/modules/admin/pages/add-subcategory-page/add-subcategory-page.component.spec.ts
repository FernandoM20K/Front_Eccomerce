import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubcategoryPageComponent } from './add-subcategory-page.component';

describe('AddSubcategoryPageComponent', () => {
  let component: AddSubcategoryPageComponent;
  let fixture: ComponentFixture<AddSubcategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubcategoryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubcategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
