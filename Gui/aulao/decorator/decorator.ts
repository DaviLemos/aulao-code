function Login(constructor: any){
let novoConstrutor: any
 //REMODELAGEM DA CLASS USUARIO
function Usuario(this: any, nome: string, senha: string){
if(nome == 'paiva' && senha == '54545454'){
  this.id = Math.floor(Math.random() * 100); 
  this.token = 'EYjGgw98bGtpG'
}else{
  this.error = 'Error Login invalido'
}
}
novoConstrutor = Usuario
return novoConstrutor
}

@Login 
class Usuario{
  constructor(public nome: string, public senha: string){}
}

let usuario:Usuario = new Usuario('paiva','54545454')
// let usuario2: Usuario = new Usuario('Davi', '54984984')

console.log(usuario)


console.log('Propriedades da classe')
for(let propriedades in usuario){
  console.log(propriedades)
}