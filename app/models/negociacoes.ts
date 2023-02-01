import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes:Array<Negociacao> =[];
    

    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao);
    }
    //RedonlyArray- é uma lista que retorna somente para leitura.
    lista():ReadonlyArray<Negociacao>{
        return [...this.negociacoes]
    }
}

