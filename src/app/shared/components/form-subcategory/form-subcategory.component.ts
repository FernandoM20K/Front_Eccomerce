import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICategoriaInterface } from 'src/app/core/models/ICategoria.interface';
import { ISubcategoriaInterface } from 'src/app/core/models/ISubcategoria.interface';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { SubcategoriesService } from 'src/app/services/subcategories/subcategories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-subcategory',
  templateUrl: './form-subcategory.component.html',
  styleUrls: ['./form-subcategory.component.scss']
})
export class FormSubcategoryComponent implements OnInit {

  categoriesList: ICategoriaInterface[] | undefined;

  @Input() subcategory: ISubcategoriaInterface  = {} as ISubcategoriaInterface;
  @Input() funcion: 'add' | 'edit' = 'add'

  formSubcategory: FormGroup = new FormGroup({})

  constructor(
    private categoriesService:CategoriesService, 
    private formBuilder:FormBuilder, 
    private subcategoriesService: SubcategoriesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.formSubcategory = this.formBuilder.group(
      {
        subcategoriaId: [this.subcategory?.subcategoriaId,],
        nombre: [this.subcategory?.nombre, [Validators.required]],
        descripcion: [this.subcategory?.descripcion, [Validators.required, Validators.maxLength(1000)]],
        imagen: [this.subcategory?.imagen, [Validators.required]],
        categoriaId: [this.subcategory?.categoriaId, [Validators.required]],
      }
    );
  }

  get id() { return this.formSubcategory.get('subcategoriaId') }
  get nombre() { return this.formSubcategory.get('nombre') }
  get descripcion() { return this.formSubcategory.get('descripcion') }
  get imagen() { return this.formSubcategory.get('imagen') }
  get categoriaId() { return this.formSubcategory.get('categoriaId') }

  getCategories() {
    this.categoriesService.getCategories().subscribe(
      {
        next: (data:ICategoriaInterface[]) => {
          this.categoriesList = data
          console.log('%c🟢🟢🟢Categorias Obtenidas con Exito, resultado: ','color:green',this.categoriesList);
        },
        error: (error) => {
          console.error('%c🔴🔴🔴Error al obtener las categorias, error: ','color:red',error);
          Swal.fire('Error al obtener las categorias', 'Ocurrio un error al obtener las categorias', 'error');
        },
        complete: () => {
          console.info('%c🟡🟡🟡Peticion Finalizada','color:yellow');
        }
      }
    )
  }

  addSubcategory() {
    this.subcategoriesService.addSubcategory(this.formSubcategory.value).subscribe(
      {
        next: (data:ISubcategoriaInterface) => {
          console.log('%c🟢🟢🟢Subcategoria Agregada con Exito, resultado: ','color:green',data);
          Swal.fire('Subcategoria Agregada', 'La subcategoria se agrego con exito', 'success');
          this.cleanForm();
        },
        error: (error) => {
          console.error('%c🔴🔴🔴Error al agregar la subcategoria, error: ','color:red',error);
          Swal.fire('Error al agregar la subcategoria', 'Ocurrio un error al agregar la subcategoria', 'error');
        },
        complete: () => {
          console.info('%c🟡🟡🟡Peticion Finalizada','color:yellow');
        }
      }
    )
  }

  updateSubcategory() {
    this.subcategoriesService.updateSubcategory(this.formSubcategory.value).subscribe(
      {
        next: (data:ISubcategoriaInterface) => {
          console.log('%c🟢🟢🟢Subcategoria Actualizada con Exito, resultado: ','color:green',data);
          Swal.fire('Subcategoria Actualizada', 'La subcategoria se actualizo con exito', 'success');
          this.cleanForm();
        },
        error: (error) => {
          console.error('%c🔴🔴🔴Error al actualizar la subcategoria, error: ','color:red',error);
          Swal.fire('Error al actualizar la subcategoria', 'Ocurrio un error al actualizar la subcategoria', 'error');
        },
        complete: () => {
          console.info('%c🟡🟡🟡Peticion Finalizada','color:yellow');
        }
      }
    )
  }

  cleanForm() {
    this.formSubcategory.reset();
  }

}
