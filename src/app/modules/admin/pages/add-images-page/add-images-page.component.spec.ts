import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImagesPageComponent } from './add-images-page.component';

describe('AddImagesPageComponent', () => {
  let component: AddImagesPageComponent;
  let fixture: ComponentFixture<AddImagesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImagesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddImagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
