import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductoInterface } from 'src/app/core/models/IProducto.interfac';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-update-product-page',
  templateUrl: './update-product-page.component.html',
  styleUrls: ['./update-product-page.component.scss']
})
export class UpdateProductPageComponent implements OnInit {

  productoObtenido: IProductoInterface | undefined;
  productId: number | undefined;

  constructor(private productService:ProductsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
  }

  getProductById(id:number) {
    this.productService.getProductById(id).subscribe(
      {
        next: (data:any) => {
          this.productoObtenido = data;
          console.log('🟢🟢🟢Peticion realizada con exito Producto Obtenido', this.productoObtenido);
        },
        error: (error:any) => {
          console.log('🔴🔴🔴Error al obtener el producto', error);
        },
        complete: () => {
          console.log('🟡🟡🟡Peticion completada');
        }
      }
    );
  }

}
