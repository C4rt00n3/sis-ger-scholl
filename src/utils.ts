const nomesFemininos = [
  "Ana da Silva",
  "Maria Oliveira",
  "Joana Santos",
  "Luiza Souza",
  "Carla Pereira",
  "Fernanda Rodrigues",
  "Mariana Almeida",
  "Patrícia Nascimento",
  "Amanda Costa",
  "Natália Fernandes",
  "Camila Carvalho",
  "Isabela Gomes",
  "Lívia Martins",
  "Laura Cardoso",
  "Letícia Moraes",
  "Beatriz Barbosa",
  "Bruna Lima",
  "Vitória Castro",
  "Marcela Ribeiro",
  "Andressa Alves",
  "Carolina Rocha",
  "Juliana Santos",
  "Larissa Silva",
  "Thaís Oliveira",
  "Manuela Souza",
  "Giovanna Pereira",
  "Ana Clara Rodrigues",
  "Renata Almeida",
  "Gabriela Nascimento",
  "Aline Costa",
  "Gabrielle Fernandes",
  "Jéssica Carvalho",
  "Isadora Gomes",
  "Rafaela Martins",
  "Letícia Cardoso",
  "Débora Moraes",
  "Priscila Barbosa",
  "Mariana Lima",
  "Tatiane Castro",
  "Júlia Ribeiro",
  "Nathália Alves",
  "Caroline Rocha",
  "Michele Santos",
  "Juliana Silva",
  "Daniela Oliveira",
  "Adriana Souza",
  "Márcia Pereira"
]
;

const nomesMasculinos = [
  "João da Silva",
  "Pedro Oliveira",
  "José Santos",
  "Luiz Souza",
  "Antônio Pereira",
  "Francisco Rodrigues",
  "Carlos Almeida",
  "Paulo Nascimento",
  "Marcos Costa",
  "Rafael Fernandes",
  "Daniel Carvalho",
  "Fernando Gomes",
  "Gustavo Martins",
  "Lucas Cardoso",
  "Mateus Moraes",
  "Diego Barbosa",
  "Bruno Lima",
  "Vinicius Castro",
  "Marcelo Ribeiro",
  "André Alves",
  "Ricardo Rocha",
  "Eduardo Santos",
  "Leandro Silva",
  "Thiago Oliveira",
  "Henrique Souza",
  "Giovanni Pereira",
  "Ramon Rodrigues",
  "Renato Almeida",
  "Felipe Nascimento",
  "Luan Costa",
  "Gabriel Fernandes",
  "Guilherme Carvalho",
  "Victor Gomes",
  "Dieison Martins",
  "Raphael Cardoso",
  "Davi Moraes",
  "Vitor Barbosa",
  "Jorge Lima",
  "Joel Castro",
  "Sérgio Ribeiro",
  "Juliano Alves",
  "Ronaldo Rocha",
  "William Santos",
  "Douglas Silva",
  "Luciano Oliveira",
  "Roberto Souza",
  "Adriano Pereira",
  "Márcio Rodrigues"
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
    anoLetivo: 2024,
    nivel: "ENSINO_FUNDAMENTAL",
    horasAnual: "1000",
    turno: "Matutino",
    status: "EM_ANDAMENTO",
    Aluno: {
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
}
