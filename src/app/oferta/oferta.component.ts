import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/oferta.service';
import { Oferta } from 'src/app/shared/oferta.model'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [ OfertasService ]
})
export class OfertaComponent {

  public ofertas:Oferta[]

  constructor(private route: ActivatedRoute, private ofertasService:OfertasService){}

  ngOnInit(){
    
    this.ofertasService.getOfertasProId(this.route.snapshot.params['id'])
    .then((response:any)=>{
      this.ofertas = response
    })
    
  }


}
