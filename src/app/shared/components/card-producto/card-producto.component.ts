import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { IProductoInterface } from 'src/app/core/models/IProducto.interfac';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.scss']
})
export class CardProductoComponent implements OnInit {

  @Input() listProducts:IProductoInterface[] | undefined;

  constructor(private renderer2:Renderer2) { }

  ngOnInit(): void {
   
  }

  cambiarImagenHover() {

  }

}
