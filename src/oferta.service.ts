import { Injectable } from '@angular/core';
import { Oferta } from "./app/shared/oferta.model"
import { HttpClient } from "@angular/common/http"

import { environment} from "src/environments/environment.development"



@Injectable()
export class OfertasService {
    

    private rota:string = environment.API

    constructor(private http: HttpClient){}

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${this.rota}?destaque=true`).toPromise()
        .then((response:any) => response)
    }

    public getOfertasPorCategorias(categoria:string): Promise<Oferta[]> {
        return this.http.get(`${this.rota}?categoria=${categoria}`).toPromise()
        .then((response:any) => response)
    }

    public getOfertasProId(id:number): Promise<Oferta[]> {
        return this.http.get(`${this.rota}?id=${id}`).toPromise()
        .then((response:any)=> response)
    }

}