import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoriaInterface } from 'src/app/core/models/ICategoria.interface';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-menu-clients',
  templateUrl: './menu-clients.component.html',
  styleUrls: ['./menu-clients.component.scss']
})
export class MenuClientsComponent implements OnInit {

  @ViewChild('fondo') fondo!:ElementRef;
  @ViewChild('menu') menu!:ElementRef;
  activeMenu: boolean = false;

  closeMenu: boolean = false;

  // CM: Valores para el despliegue del menu
  desplegar:boolean = false;
  submenuSeleccionado:number | undefined ;
  
  // CM: Para obtener los elementos de la vista -> Array de elementos de subcategorias
  @ViewChildren('subcategoria') subcategorias!:Array<ElementRef>;

  categorias: ICategoriaInterface[] = [];

  constructor(private categoriesService:CategoriesService, private renderer2:Renderer2) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
      this.categoriesService.getCategories().subscribe(
      {
        next: (data:ICategoriaInterface[]) => {
          this.categorias = data;
          console.log('%c🟢🟢🟢Peticion realizada con exito, categorias: ','color: green', this.categorias);
        },
        error: (error) => {
          console.error('%c🔴🔴🔴Error en la peticion: ','color: red', error);
        },
        complete: () => {
          console.info('%c🟡🟡🟡Peticion completada', 'color: yellow');
        }
      }
    )
  }

  // CM: Funcion para mostrar el  menu de categorias
  showMenu() {
    this.activeMenu = !this.activeMenu;
    if (this.activeMenu) {
      this.renderer2.addClass(this.fondo.nativeElement, 'active-fondo');
      this.renderer2.addClass(this.menu.nativeElement, 'active-menu');
    } else {    
      this.renderer2.removeClass(this.fondo.nativeElement, 'active-fondo');
      this.renderer2.removeClass(this.menu.nativeElement, 'active-menu');

      // CM: Ocultar las subcategorias
      this.subcategorias.forEach((subcategoria) => {
        this.renderer2.removeClass(subcategoria.nativeElement, 'desp-subcat');
      });
      this.submenuSeleccionado = undefined;
    }
  }

  // CM: Funcion para mostrar las subcategorias
  showSubcategorias(n:number) {
    let contador = 0;

    this.subcategorias.forEach((item) => {
      if(contador == n) {
        this.desplegar = true;
        this.submenuSeleccionado = contador;
        // console.log(this.desplegar, this.submenuSeleccionado, n);
      }

      contador++;
    })
  }

}
