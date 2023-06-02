import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarcaPageComponent } from './add-marca-page.component';

describe('AddMarcaPageComponent', () => {
  let component: AddMarcaPageComponent;
  let fixture: ComponentFixture<AddMarcaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMarcaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMarcaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
