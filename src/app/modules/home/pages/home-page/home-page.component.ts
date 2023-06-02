import { Component, OnInit } from '@angular/core';
import { IProductoInterface } from 'src/app/core/models/IProducto.interfac';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  listaProductos:IProductoInterface[] | undefined;

  constructor(private productoService:ProductsService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.productoService.getProducts().subscribe(
      {
        next: (data:any) => {
          console.log('%c🟢🟢🟢Peticion realizada con extio, Productos Obtenidos: ', 'color: green', data);
          this.listaProductos = data;
        },
        error: (error:any) => {
          console.log('%c🔴🔴🔴Error al obtener los productos: ', 'color: red', error);
        },
        complete: () => {
          console.log('%c🟡🟡🟡Peticion completada', 'color: yellow');
        }
      }
    );
  }

}
