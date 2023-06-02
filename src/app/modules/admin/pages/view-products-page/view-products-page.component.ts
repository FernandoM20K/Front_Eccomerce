import { Component, OnInit } from '@angular/core';
import { IProductoInterface } from 'src/app/core/models/IProducto.interfac';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-view-products-page',
  templateUrl: './view-products-page.component.html',
  styleUrls: ['./view-products-page.component.scss']
})
export class ViewProductsPageComponent implements OnInit {

  listProducts: IProductoInterface[] | undefined;

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe(
      {
        next: (data:any) => {
          this.listProducts = data;
          console.log('%c🟢🟢🟢Peticion realizada con extito, productos obtenidos: ',"color:green", this.listProducts);
        },
        error: (error:any) => {
          console.error('%c🔴🔴🔴Error al obtener los productos: ', "color:red", error);
        },
        complete: () => {
          console.info('%c🟡🟡🟡Peticion completada','color:yellow')
        }
      }
    );
  }



  
}
