import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Renderer2} from '@angular/core';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {

  @ViewChild('sidebar') sidebar!: ElementRef;

  navegacion:Array<any> = [
    {
      id: 1,
      titulo: 'Dashboard',
      icon: 'assets/img/icons/home-2-svgrepo-com.svg',
      activo: true,
    },
    {
      id: 2,
      titulo: 'Profile',
      icon: 'assets/img/icons/user-svgrepo-com.svg',
      activo: false,
      subnavegacion: [
        {
          id: 1,
          titulo: 'Seguridad',
          icon: 'assets/img/icons/user-svgrepo-com.svg',
          activo: false,
        },
        {
          id: 2,
          titulo: 'Configuración',
          icon: 'assets/img/icons/user-svgrepo-com.svg',
          activo: false,
        },
        {
          id: 3,
          titulo: 'Ver Perfil',
          icon: 'assets/img/icons/user-svgrepo-com.svg',
          activo: false,
        },
      ],
    },
    {
      id: 3,
      titulo: 'LeaderBoard',
      icon: 'assets/img/icons/chart-21-svgrepo-com.svg',
      activo: false,
    },
    {
      id: 4,
      titulo: 'Categories',
      icon: 'assets/img/icons/shopping-cart-svgrepo-com.svg',
      activo: false,
      subnavegacion: [
        {
          id: 2,
          titulo: 'Ver Categorias',
          icon: 'assets/img/icons/shopping-cart-svgrepo-com.svg',
          activo: false,
          link: 'view-categories'
        },
        {
          id: 1,
          titulo: 'Agregar',
          icon: 'assets/img/icons/shopping-cart-svgrepo-com.svg',
          activo: false,
          link: 'add-category'
        },
      ],
    },
    {
      id: 5,
      titulo: 'Subcategories',
      icon: 'assets/img/icons/shopping-cart-svgrepo-com.svg',
      activo: false,
      subnavegacion: [
        {
          id: 2,
          titulo: 'Ver Subcategorias',
          icon: 'assets/img/icons/shopping-cart-svgrepo-com.svg',
          activo: false,
          link: 'view-subcategories'
        },
        {
          id: 1,
          titulo: 'Agregar',
          icon: 'assets/img/icons/shopping-cart-svgrepo-com.svg',
          activo: false,
          link: 'add-subcategory'
        },
      ],
    },
    {
      id: 6,
      titulo: 'Products',
      icon: 'assets/img/icons/bag-2-svgrepo-com.svg',
      activo: false,
      subnavegacion: [
        {
          id: 2,
          titulo: 'Ver Productos',
          icon: 'assets/img/icons/user-svgrepo-com.svg',
          activo: false,
          link: 'view-products'
        },
        {
          id: 1,
          titulo: 'Agregar',
          icon: 'assets/img/icons/user-svgrepo-com.svg',
          activo: false,
          link: 'add-product'
        },
      ],
    },
    {
      id: 7,
      titulo: 'Sales Report',
      icon: 'assets/img/icons/diagram-svgrepo-com.svg',
      activo: false, 
    },
    {
      id: 8,
      titulo: 'Messages',
      icon: 'assets/img/icons/message-svgrepo-com.svg',
      activo: false,
      subnavegacion: [
        {
          id: 4,
          titulo: 'Enviados',
          icon: 'assets/img/icons/message-svgrepo-com.svg',
          activo: false,
        },
        {
          id: 5,
          titulo: 'Recibidos',
          icon: 'assets/img/icons/message-svgrepo-com.svg',
          activo: false,
        },
        {
          id: 6,
          titulo: 'Borradores',
          icon: 'assets/img/icons/message-svgrepo-com.svg',
          activo: false,
        },
      ],
    },
    {
      id: 9,
      titulo: 'Marcas',
      icon: 'assets/img/icons/message-svgrepo-com.svg',
      activo: false,
      subnavegacion: [
        {
          id: 4,
          titulo: 'View Marcas',
          icon: 'assets/img/icons/message-svgrepo-com.svg',
          activo: false,
          link: 'view-marcas'
        },
        {
          id: 5,
          titulo: 'Agregar',
          icon: 'assets/img/icons/message-svgrepo-com.svg',
          activo: false,
          link: 'add-marca'
        },
      ],
    },
    {
      id: 10,
      titulo: 'Settings',
      icon: 'assets/img/icons/setting-2-svgrepo-com.svg',
      activo: false,
    },
    {
      id: 11,
      titulo: 'Favourite',
      icon: 'assets/img/icons/star-1-svgrepo-com.svg',
      activo: false,
    },
    {
      id: 12,
      titulo: 'History',
      icon: 'assets/img/icons/refresh-svgrepo-com.svg',
    },
    {
      id: 13,
      titulo: 'Logout',
      icon: 'assets/img/icons/logout-svgrepo-com.svg',
      activo: false
    }
  ];

  small: boolean = false;

  constructor(private renderer2:Renderer2) { }
  
  ngOnInit(): void {

  }

  cambiarActivo(id:number): void {
    this.navegacion.forEach( item => {
      if(item.id === id){
        if(item.activo) {
          item.activo = false;
          console.log(item.id, item.activo);
        } else {
          item.activo = true;
          console.log(item.id, item.activo);
        }
      }else{
        item.activo = false;
      }
    })
  }

  cambiarTamanio() {
    this.small = !this.small;
    if(this.small){
      this.renderer2.addClass(this.sidebar.nativeElement, 'small');
    }else{
      this.renderer2.removeClass(this.sidebar.nativeElement, 'small');
    }
  }
}
