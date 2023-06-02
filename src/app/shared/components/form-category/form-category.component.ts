import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICategoriaInterface } from 'src/app/core/models/ICategoria.interface';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.scss']
})
export class FormCategoryComponent implements OnInit {

  @Input() categoryObtenida: ICategoriaInterface | undefined;
  @Input() funcion: 'add' | 'edit' = 'add'

  formCategory: FormGroup = new FormGroup({})

  constructor(
    private categoriesService:CategoriesService, 
    private formBuilder:FormBuilder, 
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formCategory = this.formBuilder.group(
      {
        categoriaId: [this.categoryObtenida?.categoriaId,],
        nombre: [this.categoryObtenida?.nombre, [Validators.required]],
        descripcion: [this.categoryObtenida?.descripcion, [Validators.required, Validators.maxLength(1000)]],
        imagen: [this.categoryObtenida?.imagen, [Validators.required]],
      }
    );
  }

  get nombre() { return this.formCategory.get('nombre') }
  get descripcion() { return this.formCategory.get('descripcion') }
  get imagen() { return this.formCategory.get('imagen') }

  addCategory() {
    this.categoriesService.addCategory(this.formCategory.value).subscribe(
      {
        next: (data:ICategoriaInterface) => {
          console.log('%c🟢🟢🟢Categoria Agregada con Exito, resultado: ','color:green',data);
          Swal.fire('Categoria Agregada', 'La categoria se agrego con exito', 'success');
          this.cleanForm();
        },
        error: (error) => {
          console.error('%c🔴🔴🔴Error al agregar la categoria, error: ','color:red',error);
          Swal.fire('Error al agregar la categoria', 'Ocurrio un error al agregar la categoria', 'error');
        },
        complete: () => {
          console.info('%c🟡🟡🟡Peticion Finalizada','color:yellow');
        }
      }
    )
  }

  updateCategory() {
    this.categoriesService.updateCategory(this.formCategory.value).subscribe(
      {
        next: (data:ICategoriaInterface) => {
          console.log('🟢🟢🟢Categoria Actualizada con Exito, resultado: ','color:green',data);
          Swal.fire('Categoria Actualizada', 'La categoria se actualizo con exito', 'success');
          this.cleanForm();
        },
        error: (error) => {
          console.error('🔴🔴🔴Error al actualizar la categoria, error: ','color:red',error);
          Swal.fire('Error al actualizar la categoria', 'Ocurrio un error al actualizar la categoria', 'error');
        },
        complete: () => {
          console.info('🟡🟡🟡Peticion Finalizada','color:yellow');
        }
      }
    )
  }

  cleanForm() {
    this.formCategory.reset();
  }

}
