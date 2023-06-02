import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISubcategoriaInterface } from 'src/app/core/models/ISubcategoria.interface';
import { SubcategoriesService } from 'src/app/services/subcategories/subcategories.service';

@Component({
  selector: 'app-update-subcategory-page',
  templateUrl: './update-subcategory-page.component.html',
  styleUrls: ['./update-subcategory-page.component.scss']
})
export class UpdateSubcategoryPageComponent implements OnInit {

  subcategoryObtenida: ISubcategoriaInterface | undefined;
  subcategoryId: number = 0;

  constructor(private subcategoriesService:SubcategoriesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.subcategoryId = this.route.snapshot.params['id'];
    this.getSubcategoryById(this.subcategoryId);
  }

  getSubcategoryById(id:number) {
    this.subcategoriesService.getSubcategoryById(id).subscribe(
      {
        next: (data:any) => {
          this.subcategoryObtenida = data;
          console.log('🟢🟢🟢Peticion realizada con exito Subcategoria Obtenida', this.subcategoryObtenida);
        },
        error: (error:any) => {
          console.log('🔴🔴🔴Error al obtener la subcategoria', error);
        },
        complete: () => {
          console.log('🟡🟡🟡Peticion completada');
        }
      }
    );
  }

}
