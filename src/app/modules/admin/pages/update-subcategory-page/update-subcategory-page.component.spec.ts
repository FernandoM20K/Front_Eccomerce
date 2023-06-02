import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubcategoryPageComponent } from './update-subcategory-page.component';

describe('UpdateSubcategoryPageComponent', () => {
  let component: UpdateSubcategoryPageComponent;
  let fixture: ComponentFixture<UpdateSubcategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSubcategoryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSubcategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
