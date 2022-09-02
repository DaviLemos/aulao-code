export interface Logistica {

 validarFretePeso(number: number): string
 validarFreteRegiao(uf: string): string  
}
      
//Interfaces são um conceito da programação orientada a objetos que tem a ver com o comportamento esperado para uma ou um conjunto de classes.
//Interfaces definem o que uma classe deve fazer e não como. Assim, interfaces não possuem a implementação de métodos pois apenas declaram o conjunto de métodos, o comportamento que uma ou um conjunto de classes deve ter. 
//Na interface, todos os métodos são portanto abstratos e públicos, já que são apenas declarados na interface sendo obrigatoriamente implementados pelas classes que implementam a interface.
