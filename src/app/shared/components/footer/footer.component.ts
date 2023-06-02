import { Component, OnInit } from '@angular/core';
import { IRedesSociales } from 'src/app/core/models/IRedesSociales.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  // CM: Obtener año actual para el footer, se actuliza automaticamente
  yearNow: number = new Date().getFullYear();
  listaRedes: IRedesSociales[] = [ // CM: Cambiar logos y links
    {
      icon: 'assets/img/icons/bag-svgrepo-com.svg',
      url: 'https://www.facebook.com'
    },
    {
      icon: 'assets/img/icons/bag-svgrepo-com.svg',
      url: 'https://twitter.com'
    },
    {
      icon: 'assets/img/icons/bag-svgrepo-com.svg',
      url: 'https://www.instagram.com'
    },
    {
      icon: 'assets/img/icons/bag-svgrepo-com.svg',
      url: 'https://www.linkedin.com'
    },
    {
      icon: 'assets/img/icons/bag-svgrepo-com.svg',
      url: 'http://youtube.com'
    },
  ];

  enlacesInteres: any[] = [// CM: Cambiar links si es necesario
    {
      nombre: 'About',
      url: '/about',
      subenlaces: [
        {
          nombre: 'About Us',
          url: '/about-us'
        },
        {
          nombre: 'Find Store',
          url: '/find-store'
        },
        {
          nombre: 'Categories',
          url: '/categories'
        },
        {
          nombre: 'Blogs',
          url: '/blogs'
        }
      ],
    },
    {
      nombre: 'PartnerShip',
      url: '/partnership',
      subenlaces: [
        {
          nombre: 'About Us',
          url: '/about-us'
        },
        {
          nombre: 'Find Store',
          url: '/find-store'
        },
        {
          nombre: 'Categories',
          url: '/categories'
        },
        {
          nombre: 'Blogs',
          url: '/blogs'
        }
      ]
    },
    {
      nombre: 'Information',
      url: '/information',
      subenlaces: [
        {
          nombre: 'Help Center',
          url: '/help-center'
        },
        {
          nombre: 'Money Refund',
          url: '/money-refund'
        },
        {
          nombre: 'Shipping',
          url: '/shipping'
        },
        {
          nombre: 'Cancellation',
          url: '/cancellation'
        }
      ]
    },
    {
      nombre: 'For Users',
      url: '/for-users',
      subenlaces: [
        {
          nombre: 'Login',
          url: '/login'
        },
        {
          nombre: 'Register',
          url: '/register'
        },
        {
          nombre: 'Settings',
          url: '/settings'
        },
        {
          nombre: 'My Orders',
          url: '/my-orders'
        }
      ]
    }
  ];


  constructor() { }

  ngOnInit(): void {

  }

}
