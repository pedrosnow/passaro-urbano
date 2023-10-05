import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/oferta.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]
 
  constructor(private ofertasService: OfertasService){

  }

  ngOnInit(): void {

    this.ofertasService.getOfertas()
    .then((ofertas: Array<Oferta>)=> {
        this.ofertas = ofertas
    })
    .catch(erro => console.log(erro))

  }

}
