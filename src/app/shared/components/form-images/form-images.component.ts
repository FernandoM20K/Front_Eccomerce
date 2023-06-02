import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IImagenInterface } from 'src/app/core/models/IImagen.interface';
import { ImagesService } from 'src/app/services/images/images.service';

@Component({
  selector: 'app-form-images',
  templateUrl: './form-images.component.html',
  styleUrls: ['./form-images.component.scss']
})
export class FormImagesComponent implements OnInit {

  imagenesByProductoId:IImagenInterface[] = [];

  formImages: FormGroup = new FormGroup({});
  productoId:number = 0;

  constructor(private formBuilder:FormBuilder, private imageServices:ImagesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productoId = this.route.snapshot.params['id'];
    this.getImagesByProductoId(this.productoId);
  }

  getImagesByProductoId(id:number){
    this.imageServices.getImagesByProductoId(id).subscribe(
      {
        next: (data:any) => {
          this.imagenesByProductoId = data;
          console.log('%c🟢🟢🟢Imagenes del Productos obtenidas con exito', 'color: #00ff00; font-weight: bold; font-size: 12px;', data);
        },
        error: (error) => {
          console.log('%c🔴🔴🔴Error al obtener las imagenes del producto', 'color: #ff0000; font-weight: bold; font-size: 16px;', error);
        }
      }
    );
  }

}
