import { Logistica } from "../model/Logistica"
import { CorreiosPac } from "../model/CorreiosPac"
import { CorreiosSedex } from "../model/CorreiosSedex"
import { JadlogSlow } from "../model/JadlogSlow"
import { JadlogExpress } from "../model/JadlogExpress"

const initialSistem = () => {

const jadlogSlow:Logistica = new JadlogSlow('Slow', 'Jadlog')
const jadlogExpress:Logistica = new JadlogExpress('Express','Jadlog'  )
const correiosPac:Logistica= new CorreiosPac('Pac', 'Correios')
const correiosSedex:Logistica = new CorreiosSedex('Sedex','Correios' )


function validarFrete(number: number): void{
  console.log()
  console.log(jadlogSlow.validarFretePeso(number))
  console.log(jadlogExpress.validarFretePeso(number))
  console.log(correiosPac.validarFretePeso(number))
  console.log(correiosSedex.validarFretePeso(number))
  console.log()
 }

 function validarFreteRegiao(uf: string): void{
  if(uf.length !== 2){
    console.log('Erro... Informe uma sigla conforme o padrão solicitado')
    return
  }
  console.log()
  console.log(jadlogSlow.validarFreteRegiao(uf))
  console.log(jadlogExpress.validarFreteRegiao(uf))
  console.log(correiosPac.validarFreteRegiao(uf))
  console.log(correiosSedex.validarFreteRegiao(uf))
  console.log()
 }

 return {
  validarFrete,
  validarFreteRegiao
 }
}
export default initialSistem
