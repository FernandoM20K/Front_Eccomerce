import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMarcaPageComponent } from './update-marca-page.component';

describe('UpdateMarcaPageComponent', () => {
  let component: UpdateMarcaPageComponent;
  let fixture: ComponentFixture<UpdateMarcaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMarcaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMarcaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
