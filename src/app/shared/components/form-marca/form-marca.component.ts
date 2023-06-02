import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMarcaInterface } from 'src/app/core/models/IMarca.interface';
import { MarcaService } from 'src/app/services/marca/marca.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-marca',
  templateUrl: './form-marca.component.html',
  styleUrls: ['./form-marca.component.scss']
})
export class FormMarcaComponent implements OnInit {

  @Input() funcion: 'add' | 'edit' = 'add';
  @Input() marca: IMarcaInterface | undefined;

  formMarca: FormGroup = new FormGroup({});

  constructor(private marcaService:MarcaService ,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formMarca = this.formBuilder.group(
      {
        marcaId: [this.marca?.marcaId,],
        nombre: [this.marca?.nombre, [Validators.required]],
        descripcion: [this.marca?.descripcion, [Validators.required, Validators.maxLength(1000)]],
        logo: [this.marca?.logo, [Validators.required]],
      }
    );
  }

  get nombre() { return this.formMarca.get('nombre'); }
  get descripcion() { return this.formMarca.get('descripcion'); }
  get logo() { return this.formMarca.get('logo'); }

  addMarca() {
    this.marcaService.addMarca(this.formMarca.value).subscribe(
      {
        next: (data:IMarcaInterface) => {
          console.log('%c🟢🟢🟢Marca Agregada con Exito, resultado: ','color:green',data);
          Swal.fire('Marca Agregada', 'La marca se agrego con exito', 'success');
          this.cleanForm();
        },
        error: (error) => {
          console.log('%c🔴🔴🔴Error al agregar Marca, error: ','color:red',error);
          Swal.fire('Error al agregar la marca', 'Ocurrio un error al agregar la marca', 'error');
        },
        complete: () => {
          console.log('%c🟡🟡🟡Marca Agregada con Exito','color:yellow');
        }
      }
    )
  }

  updateMarca() {
    this.marcaService.updateMarca(this.formMarca.value).subscribe(
      {
        next: (data:IMarcaInterface) => {
          console.log('%c🟢🟢🟢Marca Actualizada con Exito, resultado: ','color:green',data);
          Swal.fire('Marca Actualizada', 'La marca se actualizo con exito', 'success');
          this.cleanForm();
        },
        error: (error) => {
          console.log('%c🔴🔴🔴Error al actualizar Marca, error: ','color:red',error);
        },
        complete: () => {
          console.log('%c🟡🟡🟡Marca Actualizada con Exito','co');
        }
      }
    )
  }

  cleanForm() {
    this.formMarca.reset();
  }

}
