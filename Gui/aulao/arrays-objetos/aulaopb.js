const usuarios = [
  {
    nome: 'Diogo',
    sexo: 'M',
    dinheiro: 'R$ 150',
  },
  {
    nome: 'Fernanda',
    sexo: 'F',
    dinheiro: 'R$ 180',
  },
  {
    nome: 'Amanda',
    sexo: 'F',
    dinheiro: 'R$ 130',
  },
  {
    nome: 'Thiago',
    sexo: 'M',
    dinheiro: 'R$ 110',
  },
];

// METODO FILTER, PERCORRENDO O ARRAY DE OBJETOS E RETORNANDO APENAS OS OBJETOS CONFORME O PARAMETRO DA FUNÇÃO
const filtrarUsuariosGenero = (genero) =>
  usuarios.filter((usuario) => usuario.sexo == genero);
console.log(filtrarUsuariosGenero('M'));

//FOREACH, PECORRENDO O ARRAY E INSERINDO INFORMAÇÕES CONFORME O ARRAY
const validaNome = () => {
  usuarios.forEach((usuario) =>
    usuario.sexo == 'F'
      ? (usuario.nome = 'Sra ' + usuario.nome)
      : (usuario.nome = 'Sr ' + usuario.nome),
  );
};
validaNome();
console.log(usuarios);

// MAP PERCORRENDO O ARRAY DE OBJ, ALTERANDO O R$ PARA '', E TRANDFORMANDO EM NUMERO PARA PODER UTILIZAR O REDUCE PARA FAZER O SOMATORIO DO 'DINHEIRO'
const somatorioDeContas = () => {
  const total = usuarios
    .map((usuario) => +usuario.dinheiro.replace('R$ ', ''))
    .reduce((prev, acc) => prev + acc);
  return 'Saldo Bancario Total: R$ ' + total;
};
console.log(somatorioDeContas());

// MAP PERCORRENDO O ARRAY, E INDICANDO O INDEX DE CADA OBJETO
const sinalizandoIndex = () =>
  usuarios.map((usuario, index) =>
    console.log(`Usuário: ${usuario.nome} Index: ${index}`),
  );
sinalizandoIndex();

// RECENDO UMA DATA, E FORMATANDO ELA.
const formataData = (data) => {
  const dataSplit = data.split('T');
  const dataFormatada = dataSplit[0].replace(
    /([0-9]{4})[-]([0-9]{2})[-]([0-9]{2})/,
    '$3/$2/$1',
  );
  return dataFormatada;
};
const data = '2022-05-15T18:15:51.801Z';
console.log(formataData(data));

// Adicionando e removendo novos objetos ao Array
const novoUsuario = {
  nome: 'Tales',
  sexo: 'M',
  dinheiro: 'R$ 150',
};
usuarios.push(novoUsuario);
console.log('Adicionando ao FIM do array utilizando o metodo PUSH');
console.log(usuarios);

usuarios.unshift(novoUsuario);
console.log('Adicionando ao INICIO do array utilizando o metodo UNSHIFT');
console.log(usuarios);

usuarios.pop();
console.log('Removendo o ULTIMO elemento do array com o metodo POP');
console.log(usuarios);

usuarios.shift();
console.log('Removendo o PRIMEIRO elemento do array com o metodo SHIFT');
console.log(usuarios);
