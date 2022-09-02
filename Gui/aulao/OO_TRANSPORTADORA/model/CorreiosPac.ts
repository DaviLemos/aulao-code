import { Correios } from "./Correios";
import { Logistica } from "./Logistica";


export class CorreiosPac extends Correios implements Logistica {

  constructor(
    private _modalidade: string,
    transportadora: string
  ) 
  {
    super(transportadora);
  }

  public validarFretePeso(number: number): string {
    if(number > 10){
      return `${this.transportadora} modalidade ${this._modalidade}: Frete Aceito`
     }else{
       return `${this.transportadora} modalidade ${this._modalidade}: Frete Negado`
     }
  }
  public validarFreteRegiao(uf: string): string {
    if(uf.toUpperCase() == 'RJ' || uf.toUpperCase() == 'TO'){
     return `${this.transportadora} modalidade ${this._modalidade}: Frete Aceito`
    }else{
     return `${this.transportadora} modalidade ${this._modalidade}: Frete Negado`
    }
  }

}
