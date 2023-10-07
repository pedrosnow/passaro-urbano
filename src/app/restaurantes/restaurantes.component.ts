import { Component } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from 'src/oferta.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent {

      public ofertas: Oferta[]

      constructor(private ofertaService: OfertasService){}

      ngOnInit(){
        this.ofertaService.getOfertasPorCategorias('restaurante')
        .then((response: any) => {
          this.ofertas = response
        })
      }
}
