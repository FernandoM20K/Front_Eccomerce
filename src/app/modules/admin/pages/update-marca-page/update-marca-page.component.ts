import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMarcaInterface } from 'src/app/core/models/IMarca.interface';
import { MarcaService } from 'src/app/services/marca/marca.service';

@Component({
  selector: 'app-update-marca-page',
  templateUrl: './update-marca-page.component.html',
  styleUrls: ['./update-marca-page.component.scss']
})
export class UpdateMarcaPageComponent implements OnInit {

  marcaObtenida: IMarcaInterface | undefined;
  marcaId: number = 0;

  constructor(private marcaService:MarcaService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.marcaId = this.route.snapshot.params['id'];
    this.getMarcaById(this.marcaId);
  }

  getMarcaById(id:number) {
    this.marcaService.getMarcaById(id).subscribe(
      {
        next: (data:any) => {
          this.marcaObtenida = data;
          console.log('🟢🟢🟢Marca Obtenida con Exito, resultado: ',data);
        },
        error: (error) => {
          console.log('🔴🔴🔴Error al obtener Marca, error: ',error);
        },
        complete: () => {
          console.log('🟡🟡🟡Peticion Finalizada');
        }
      }
    );
  }

}
