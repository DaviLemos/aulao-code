import { Correios } from "./Correios";
import { Logistica } from "./Logistica";

export class CorreiosSedex extends Correios implements Logistica {

  constructor(
    private _modalidade: string,
    transportadora: string
  ) 
  {
    super(transportadora);
  }

  public validarFretePeso(number: number): string {
    if(number < 5){
      return `${this.transportadora} modalidade ${this._modalidade}: Frete Aceito`
     }else{
       return `${this.transportadora} modalidade ${this._modalidade}: Frete Negado`
     }
  }
  public validarFreteRegiao(uf: string): string {
    if(uf.toUpperCase() == 'PR' || uf.toUpperCase() == 'TO'){
     return `${this.transportadora} modalidade ${this._modalidade}: Frete Aceito`
    }else{
     return `${this.transportadora} modalidade ${this._modalidade}: Frete Negado`
    }
  }
}
//Classe herdeira/filha