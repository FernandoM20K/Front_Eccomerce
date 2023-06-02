import { Component, Input, OnInit } from '@angular/core';
import { ISubcategoriaInterface } from 'src/app/core/models/ISubcategoria.interface';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.scss']
})
export class SubcategoriesComponent implements OnInit {

  @Input() subcategories: ISubcategoriaInterface[] | undefined;
  @Input() tituloCategoria: string | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
