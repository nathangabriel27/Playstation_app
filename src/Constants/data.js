
const Locais = [
  {
    id: 1,
    localNome: 'Unimed BH',
    endereco: 'Rua Detetive Nelson Silva, Belo Horizonte, 47, Bairro Santa Efigenia, ',
  },
  {
    id: 2,
    localNome: 'Shopping Cidade',
    endereco: 'R. Safira, 145 - Pedra Azul, Contagem - MG, 32183-360',
  },
  {
    id: 3,
    localNome: 'Total Helt',
    endereco: 'Av. José Faria da Rocha, 5069 - Eldorado, Contagem - MG, 32310-210',
  },
  {
    id: 4,
    localNome: 'Dentista João',
    endereco: 'R. Condor, 425 - Nova Cintra, Belo Horizonte - MG, 30516-300',
  },
  {
    id: 5,
    localNome: 'Condomínio Lagoa',
    endereco: 'R. Pomba, 652 - Goiânia, Belo ',
  },
  {
    id: 6,
    localNome: 'Blue Tower',
    endereco: 'R. Quatro, 282 - Tropical, Contagem - MG, 32070-530',
  },

]


const Comodos = [
  {
    id: 1,
    localNome: 'Recepção',
    torre: 'A',
    status: true,
    tarefas: {
      atividades: [
        {
          nome: 'Limpeza da Janela da torre A',
          status: true
        },
        {
          nome: 'Recepção',
          status: true
        },
        {
          nome: 'Sauna torre a',
          status: true
        },
      ],
      produtos: ['Detergente', 'sabão', 'Alcool em gel', 'flanela branca', 'Vassoura','Detergente', 'sabão', 'Alcool em gel', 'flanela branca', 'Vassoura'],
      equipamentos: ['Aspirador de pó', 'Enceradeira'],
      epi: ['1 - Bota', '2 - Luva', '3 - Capacete', '4 - Avental'],
    }
  },
  {
    id: 2,
    localNome: 'Hall',
    torre: 'E',
    status: true,
    tarefas: {
      atividades: [
        {
          nome: 'Limpeza de todos os quartos',
          status: true
        },
        {
          nome: 'cozinha',
          status: true
        },
        {
          nome: 'elevador',
          status: true
        },
      ],
      produtos: ['Detergente', 'sabão', 'Alcool em gel', 'flanela branca', 'vassoura'],
      equipamentos: ['Aspirador de pó', 'Enceradeira'],
      epi: ['1 - Bota', '2 - Luva', '3 - Capacete', '4 - Avental'],
    }
  },
  {
    id: 3,
    localNome: 'Elevador',
    torre: 'C',
    status: false,
    tarefas: {
      atividades: [
        {
          nome: 'Mesa do chefe',
          status: true
        },
        {
          nome: 'geladeira',
          status: true
        },
        {
          nome: 'banheiro',
          status: true
        },
      ],
      produtos: ['Detergente', 'sabão', 'Alcool em gel', 'flanela branca', 'vassoura'],
      equipamentos: ['Aspirador de pó', 'Enceradeira'],
      epi: ['1 - Bota', '2 - Luva', '3 - Capacete', '4 - Avental'],
    }
  },
  {
    id: 4,
    localNome: 'Escada',
    torre: 'S',
    status: false,
    tarefas: {
      atividades: [
        {
          nome: 'Arquibancada',
          status: true
        },
        {
          nome: 'escada',
          status: true
        },
        {
          nome: 'bancos',
          status: true
        },
      ],
      produtos: ['Detergente', 'sabão', 'Alcool em gel', 'flanela branca', 'vassoura'],
      equipamentos: ['Aspirador de pó', 'Enceradeira'],
      epi: ['1 - Bota', '2 - Luva', '3 - Capacete', '4 - Avental'],
    }
  },
  {
    id: 5,
    localNome: 'Sala3',
    torre: 'D',
    status: true,
    tarefas: {
      atividades: [
        {
          nome: 'tapete',
          status: true
        },
        {
          nome: 'sofa',
          status: true
        },
        {
          nome: 'aquario',
          status: true
        },
      ],
      produtos: ['Detergente', 'sabão', 'Alcool em gel', 'flanela branca', 'vassoura'],
      equipamentos: ['Aspirador de pó', 'Enceradeira'],
      epi: ['1 - Bota', '2 - Luva', '3 - Capacete', '4 - Avental'],
    }
  },
  {
    id: 6,
    localNome: 'Sauna',
    torre: 'E',
    status: false,
    tarefas: {
      atividades: [
        {
          nome: 'Limpeza da Janela',
          status: true
        },
        {
          nome: 'Recepção do terreo',
          status: true
        },
        {
          nome: 'Sauna',
          status: true
        },
      ],
      produtos: ['Detergente', 'sabão', 'Alcool em gel', 'flanela branca', 'vassoura'],
      equipamentos: ['Aspirador de pó', 'Enceradeira'],
      epi: ['1 - Bota', '2 - Luva', '3 - Capacete', '4 - Avental'],
    }
  },

]

export { Locais, Comodos }