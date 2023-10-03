type Imagens = {
    url:string
}

export interface Oferta {
    id:number,
    categoria: string,
    titulo: string,
    descricao_oferta: string,
    anunciante: string,
    valor: number,
    destaque: true,
    imagens: Array<Imagens>
}