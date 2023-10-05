import { Injectable } from '@angular/core';
import { Oferta } from "./app/shared/oferta.model"
import { HttpClient } from "@angular/common/http"



@Injectable()
export class OfertasService {
    

    constructor(private http: HttpClient){}

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get('http://localhost:3000/ofertas').toPromise()
        .then((resposta:any) => resposta)
    }

}