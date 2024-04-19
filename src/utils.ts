const nomesFemininos = [
  'Maria',
  'Ana',
  'Francisca',
  'Antônia',
  'Adriana',
  'Juliana',
  'Márcia',
  'Fernanda',
  'Aline',
  'Carla',
  'Beatriz',
  'Vanessa',
  'Sandra',
  'Luana',
  'Tatiane',
  'Luciana',
  'Camila',
  'Isabela',
  'Jéssica',
  'Rafaela',
  'Giovana',
  'Natália',
  'Mariana',
  'Eduarda',
  'Gabriela',
  'Vitória',
  'Letícia',
  'Patrícia',
  'Thaís',
  'Renata',
  'Caroline',
  'Larissa',
  'Priscila',
  'Bianca',
  'Daniela',
  'Fátima',
  'Rita',
  'Cristina',
  'Débora',
  'Helena',
  'Sônia',
  'Clarice',
  'Estela',
  'Marisa',
  'Valéria',
  'Silvana',
  'Elaine',
  'Gisele',
  'Amanda',
  'Cintia',
  'Denise',
  'Lorena',
  'Michele',
  'Sheila',
  'Tânia',
  'Elenice',
  'Fernanda',
  'Tatiana',
  'Viviane',
  'Wanessa',
  'Cassia',
  'Isis',
  'Ivete',
  'Jucélia',
  'Karine',
  'Laila',
  'Mirella',
  'Naiara',
  'Olívia',
  'Paula',
  'Rafaela',
  'Sabrina',
  'Taís',
  'Ursula',
  'Valentina',
  'Waleska',
  'Ximena',
  'Yasmin',
  'Zara',
  'Ana Clara',
  'Bianca Maria',
  'Clara Maria',
  'Daniela Fernanda',
  'Eduarda Beatriz',
  'Fernanda Cristina',
  'Gabriela Luana',
  'Helena Sofia',
  'Isabela Sophia',
  'Jéssica Vitória',
  'Karine Beatriz',
  'Larissa Eduarda',
  'Mariana Beatriz',
  'Natália Eduarda',
  'Olívia Maria',
  'Patrícia Helena',
  'Rafaela Fernanda',
  'Sandra Beatriz',
  'Tatiana Cristina',
  'Ursula Maria',
  'Valentina Sofia',
  'Wanessa Vitória',
  'Ximena Beatriz',
  'Yasmin Eduarda',
  'Zara Maria',
];

const nomesMasculinos = [
  'José',
  'João',
  'Antônio',
  'Francisco',
  'Carlos',
  'Paulo',
  'Pedro',
  'Lucas',
  'Marcos',
  'Luiz',
  'Rafael',
  'Daniel',
  'Felipe',
  'Bruno',
  'Diego',
  'Eduardo',
  'Fernando',
  'Gustavo',
  'Igor',
  'Júlio',
  'Kleber',
  'Leonardo',
  'Marcelo',
  'Nelson',
  'Otávio',
  'Pablo',
  'Ramon',
  'Samuel',
  'Thiago',
  'Vinícius',
  'William',
  'Xavier',
  'Yago',
  'Zacarias',
  'Adriano',
  'Bernardo',
  'César',
  'Davi',
  'Elvis',
  'Fabiano',
  'Gabriel',
  'Heitor',
  'Isaac',
  'Joaquim',
  'Kalil',
  'Leandro',
  'Matheus',
  'Nicolau',
  'Orlando',
  'Patrick',
  'Quintino',
  'Ronaldo',
  'Sérgio',
  'Tiago',
  'Ulisses',
  'Vitor',
  'Wagner',
  'Xerxes',
  'Yuri',
  'Zélio',
  'André Luiz',
  'Bruno Henrique',
  'Carlos Eduardo',
  'Daniel Filipe',
  'Eduardo Henrique',
  'Felipe Augusto',
  'Gustavo Henrique',
  'Henrique Eduardo',
  'Igor Rafael',
  'João Gabriel',
  'Kleber Eduardo',
  'Leonardo Henrique',
  'Marcelo José',
  'Nelson Antônio',
  'Otávio Augusto',
  'Paulo Sérgio',
  'Rafael Felipe',
  'Samuel Augusto',
  'Thiago Henrique',
  'Vinícius Eduardo',
  'William José',
  'Xavier Antônio',
  'Yago Gabriel',
  'Zacarias Henrique',
];
const nomes = [...nomesFemininos, ...nomesMasculinos];
export function generateRandomNumber(maxDigits) {
  let randomNumber = '';
  for (let i = 0; i < maxDigits; i++) {
    const digit = Math.floor(Math.random() * 10); // Gera um dígito aleatório de 0 a 9
    randomNumber += digit.toString(); // Adiciona o dígito à string do número aleatório
  }
  return randomNumber;
}

export function numRandom(max) {
  return Math.floor(Math.random() * max); // Gera um número aleatório entre 1 e 100
}

export function document_test() {
  let sus = generateRandomNumber(15);
  let rg = generateRandomNumber(10);
  let cpf = generateRandomNumber(11);
  let inscricao = generateRandomNumber(12);

  const nome = nomes[numRandom(nomes.length)];
  const mae = nomesFemininos[numRandom(nomesFemininos.length)];
  const pai = nomesMasculinos[numRandom(nomesMasculinos.length)];
  const obj = {
    NrRegistro: numRandom(100),
    livro: nome[0].toLocaleUpperCase(),
    folha: numRandom(100),
    RG: {
      rgNumero: rg,
      cpf: cpf,
      dataExpedicao: '2022-04-15T12:00:00Z',
      dataNascimento: '2000-01-01T00:00:00Z',
      UF: 'SP',
      orgaoEmissor: 'SSP',
      mae: mae,
      pai: pai,
      naturalidade: 'São Paulo',
      docOrigem: 'RG',
    },
    SUS: {
      nome: nome,
      nascimento: '2000-01-01',
      sexo: 'Masculino',
      numero: sus,
    },
    TituloEleitor: {
      nome: nome,
      inscricao: inscricao,
      dataNascimento: '2000-01-01T00:00:00Z',
      dataEmissao: '2022-04-15T12:00:00Z',
      pai: pai,
      mae: mae,
      zona: numRandom(1000),
      secao: numRandom(10000),
    },
    SituacaoMilitar: {
      tipoDeDocumento: 'Reservista',
      ra: generateRandomNumber(12),
      cpf: cpf,
      nome: nome,
      pai: pai,
      mae: mae,
      localNascimento: 'São Paulo',
      dataNascimento: '2000-01-01T00:00:00Z',
      situacaoServicoMilitar: 'Dispensado',
      validade: null,
    },
  };
  return obj;
}

export function postmanBody() {
  const conteudoObjeto = document_test(); // Chama a função document_test() para obter o objeto completo
  const nome = conteudoObjeto.SUS.nome
  const pai = conteudoObjeto.RG.pai
  const mae = conteudoObjeto.RG.mae
  const indexNome = nomes.indexOf(nome)
  const corRaca_Aluno = ["preta", "parda", "branco", "indigena"][numRandom(3)]
  return {
    nome: nome,
    corRaca_Aluno,
    sexo: indexNome < nomesFemininos.length - 1 ? "Feminino" : "Masculino",
    Documentos: conteudoObjeto,
    Endereco: {
      logradouro: "Rua Exemplo",
      numero: numRandom(1000),
      complemento: "Complemento Exemplo",
      bairro: "Bairro Exemplo",
      cidade: "Cidade Exemplo",
      estado: "SP",
      cep: numRandom(8)
    },
    Convenio: {
      nome: "Nome do Convênio",
      descricao: "Descrição do Convênio",
      dataInicio: "2024-04-18T00:00:00Z",
      dataFim: "2025-04-18T00:00:00Z",
      ativo: true
    },
    AlunoTransferencia: {
      procedencia: "Outra escola"
    },
    Serie: {
      nomeSerie: "2A",
      nivelEscolar: "ENSINO_FUNDAMENTAL"
    },
    filiacao: [
      {
        nome: pai,
        celular: generateRandomNumber(11) + ""
      },
      {
        nome: mae,
        celular: generateRandomNumber(11) + ""
      }
    ]
  }
}
