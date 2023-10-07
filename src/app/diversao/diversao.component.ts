import { Component } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from 'src/oferta.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.scss'],
  providers: [OfertasService]
})
export class DiversaoComponent {

  public ofertas:Oferta[]

  constructor(private ofertasServices:OfertasService){}

  ngOnInit(){
    this.ofertasServices.getOfertasPorCategorias('diversao')
    .then((response:any) =>{
      this.ofertas = response
    })
  } 

}
