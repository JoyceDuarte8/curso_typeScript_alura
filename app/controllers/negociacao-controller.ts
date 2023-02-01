import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController{
    private inputData:HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes:Negociacoes = new Negociacoes();
     
    constructor(){
        this.inputData=document.querySelector('#data');
        this.inputQuantidade=document.querySelector('#quantidade');
        this.inputValor=document.querySelector('#valor');
    }

    adiciona(): void{
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        //saber quantas negociações tem
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    

    criaNegociacao(): Negociacao{
        const exp= /-/g;
        //uma expressão global que converte o valor de data para xx/xx/xxxx
        const date= new Date(this.inputData.value.replace(exp, ','));
        // o replace vai procurar tudo que tem hifen e vai substituir por virgula
        const quantidade = parseInt (this.inputQuantidade.value);
        const valor= parseFloat(this.inputValor.value);
        return new Negociacao(date,quantidade,valor);
    
    }
    
    limparFormulario():void{
        this.inputData.value='';
        this.inputQuantidade.value='';
        this.inputValor.value='';
        this.inputData.focus();
    }
}