import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductoInterface } from 'src/app/core/models/IProducto.interfac';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  listProducts: IProductoInterface[] = [];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe(
      {
        next: (data:IProductoInterface[]) => {
          this.listProducts = data;
          console.log('%c🟢🟢🟢Peticion realizada con exito, productos obtenidos: ','color:green',data);
        },
        error: (error:any) => {
          console.error('%c🔴🔴🔴Error al obtener los productos: ','color:red',error);
        },
        complete: () => {
          console.info('%c🟡🟡🟡Peticion finalizada','color:yellow');
        }
      }
    );
  }

  getProductsPaginated(page:number, size:number) {
    this.productsService.getProductsPaginated(page, size).subscribe(
      {
        next: (data:IProductoInterface[]) => {
          this.listProducts = data;
          console.log('%c🟢🟢🟢Peticion realizada con exito, productos obtenidos: ','color:green',data);
        },
        error: (error:any) => {
          console.error('%c🔴🔴🔴Error al obtener los productos: ','color:red',error);
        },
        complete: () => {
          console.info('%c🟡🟡🟡Peticion finalizada','color:yellow');
        }
      }
    );
  }

}
