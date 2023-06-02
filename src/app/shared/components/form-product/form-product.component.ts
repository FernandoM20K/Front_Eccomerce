import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IProductoInterface } from 'src/app/core/models/IProducto.interfac';
import { FormBuilder } from '@angular/forms';

import { Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products/products.service';
import { MarcaService } from 'src/app/services/marca/marca.service';
import { SubcategoriesService } from 'src/app/services/subcategories/subcategories.service';
import { IMarcaInterface } from 'src/app/core/models/IMarca.interface';
import { ISubcategoriaInterface } from 'src/app/core/models/ISubcategoria.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  @Input() product: IProductoInterface | undefined = undefined;
  @Input() funcion: 'add' | 'edit' = 'add';

  formProduct: FormGroup = new FormGroup({});

  marcas: IMarcaInterface[] = [];
  subcategorias: ISubcategoriaInterface[] = [];

  constructor(
    private formBuilder:FormBuilder, 
    private productsService:ProductsService,
    private marcaService:MarcaService,
    private subcategoriesService:SubcategoriesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getSubcategorias();
    this.getMarcas();
    this.formProduct = this.formBuilder.group(
      {
        id: [this.product?.productoId,[Validators.required]],
        nombre: [this.product?.nombre,[Validators.required, Validators.maxLength(70)]],
        descripcion: [this.product?.descripcion,[Validators.required, Validators.maxLength(1000)]],
        precio: [this.product?.precio,[Validators.required, Validators.min(0)]],
        stock: [this.product?.stock,[Validators.required, Validators.min(1)]],
        estado: [this.product?.estado,[Validators.required]],
        envioGratis: [this.product?.envioGratis,[Validators.required]],
        marcaId: [this.product?.marcaId,[Validators.required]],
        subcategoriaId: [this.product?.subcategoriaId,[Validators.required]],
      }
    );
  }

  get id() { 
    return this.formProduct.get('id'); 
  }

  get nombre() {
    return this.formProduct.get('nombre');
  }

  get descripcion() {
    return this.formProduct.get('descripcion');
  }

  get precio() {
    return this.formProduct.get('precio');
  }

  get stock() {
    return this.formProduct.get('stock');
  }

  get estado() {
    return this.formProduct.get('estado');
  }

  get envioGratis() {
    return this.formProduct.get('envioGratis');
  }

  get marcaId() {
    return this.formProduct.get('marcaId');
  }

  get subcategoriaId() {
    return this.formProduct.get('subcategoriaId');
  }

  getMarcas() {
    this.marcaService.getMarcas().subscribe(
      {
        next: (data:IMarcaInterface[]) => {
          this.marcas = data;
          console.log('%c🟢🟢🟢Marcas obtenidas con éxito, información: ','color:green', this.marcas);
        },
        error: (error) => {
          console.error('%c🔴🔴🔴Error al obtener marcas, información: ','color:red', error);
          Swal.fire('Error al obtener marcas', 'Ocurrió un error al obtener las marcas', 'error');
        },
        complete: () => {
          console.info('%c🟡🟡🟡Petición completada','color:yellow');
        }
      }
    );
  }

  getSubcategorias() {
    this.subcategoriesService.getSubcategories().subscribe(
      {
        next: (data:ISubcategoriaInterface[]) => {
          this.subcategorias = data;
          console.log('%c🟢🟢🟢Subcategorias obtenidas con éxito, información: ','color:green', this.subcategorias);
        },
        error: (error) => {
          console.error('$c🔴🔴🔴Error al obtener subcategorias, información: ','color:red', error);
          Swal.fire('Error al obtener subcategorias', 'Ocurrió un error al obtener las subcategorias', 'error');
        },
        complete: () => {
          console.info('%c🟡🟡🟡Petición completada','color:yellow');
        }
      }
    );
  }

  addProduct() {
    this.productsService.addProduct(this.formProduct.value).subscribe(
      {
        next: (data:IProductoInterface) => {
          console.log('%c🟢🟢🟢Producto agregado con éxito, información: ','color:green', data);
          Swal.fire('Producto agregado', 'El producto se agregó con éxito', 'success');
          this.cleanForm()
          this.router.navigate(['/admin/view-products']);
        },
        error: (error) => {
          console.error('%c🔴🔴🔴Error al agregar producto, información: ','color:red', error);
          console.table(this.formProduct.value);
          Swal.fire('Error al agregar producto', 'Ocurrió un error al agregar el producto', 'error');
        },
        complete: () => {
          console.info('%c🟡🟡🟡Petición completada','color:yellow');
        }
      }
    );
  }

  updateProduct() {
    this.productsService.updateProduct(this.formProduct.value).subscribe(
      {
        next: (data:IProductoInterface) => {
          console.log('%c🟢🟢🟢Producto actualizado con éxito, información: ','color:green', data);
          Swal.fire('Producto actualizado', 'El producto se actualizó con éxito', 'success');
          this.cleanForm()
          this.router.navigate(['/admin/view-products']);
        },
        error: (error) => {
          console.error('🔴🔴🔴Error al actualizar producto, información: ','color:red', error);
          Swal.fire('Error al actualizar producto', 'Ocurrió un error al actualizar el producto', 'error');
        },
        complete: () => {
          console.info('🟡🟡🟡Petición completada','color:yellow');
        }
      }
    );
  }

  cleanForm() {
    this.formProduct.reset();
  }

}
