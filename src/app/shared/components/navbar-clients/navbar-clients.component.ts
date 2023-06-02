import { Component, OnInit } from '@angular/core';
import { ICategoriaInterface } from 'src/app/core/models/ICategoria.interface';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-navbar-clients',
  templateUrl: './navbar-clients.component.html',
  styleUrls: ['./navbar-clients.component.scss']
})
export class NavbarClientsComponent implements OnInit {

  categoriasObtenidas: ICategoriaInterface[] = [];

  nav: Array<any> = [
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'Shop',
    },
    {
      id: 3,
      name: 'About',
    }
  ];

  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {

  }

  getCategories() {
    this.categoriesService.getCategories().subscribe(
      {
        next: (data:any) => {
          this.categoriasObtenidas = data;
          console.log('🟢🟢🟢Peticion realizada con exito, categorias obtenidas: ', this.categoriasObtenidas);
        },
        error: (error:any) => {
          console.log('🔴🔴🔴Error al obtener las categorias: ', error);
        },
        complete: () => {
          console.log('🟡🟡🟡Peticion completada');
        }
      }
    );
  }

}
