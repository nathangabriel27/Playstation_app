
const dataUserProfile = {
  id: 27,
  name: 'Nathan Gabriel',
  photoProfile: 'https://avatars.githubusercontent.com/u/43018177?v=4',
  usernameGithub: 'nathangabriel27',
}

const advertising = [
  {
    tag: 'Games do mês',
    title: 'Games para você',
    subTitle: 'Selecione um exclusivo da psn',
    photoGame: 'https://playstation-app.s3.amazonaws.com/homenAranha.png',
    colorBackground: '#39B4DC',
  },
  {
    tag: 'Game do ano',
    title: 'God of War',
    subTitle: 'Jogo mais vendido do ano ',
    photoGame: 'https://playstation-app.s3.amazonaws.com/kratos.png',
    colorBackground: '#DC3939',


  },
]

const consolesPlaystation = [
  {
    id: 1,
    consoleName: `Sony Playstation 5 \ncom controle`,
    description:'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. ',
    price: 750,
    uriPhotoCosole: 'https://playstation-app.s3.amazonaws.com/console.png',
    data: {
      storage: '1TB',
      tecnogi: { name: '3D AudioTech', value: '3D' },
      velocity: {name: 'Velocidade com SSD', value: '600 MB/s'},
      description: '',
      features: { resolution: '4K TV Gamming', hdr: 'HDR Technology', fps: 120, tecnologia: 'Ray Tracing' }
    },
  },
  {
    id: 2,
    consoleName: `Sony Playstation 5 \n`,
    description:'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. ',
    price: 500,
    uriPhotoCosole: 'https://playstation-app.s3.amazonaws.com/semcontrole.png',
    data: {
      storage: '2TB',
      tecnogi: { name: '3D AudioTech', value: '3D' },
      velocity: {name: 'Velocidade com SSD', value: '600 MB/s'},
      description: '',
      features: { resolution: '4K TV Gamming', hdr: 'HDR Technology', fps: 120, tecnologia: 'Ray Tracing' }
    },
  },
  {
    id: 3,
    consoleName: `Sony Playstation 4 \n`,
    description:'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.',
    price: 300,
    uriPhotoCosole: 'https://playstation-app.s3.amazonaws.com/White+PS4+-+20.png',
    data: {
      storage: '500 GB',
      tecnogi: { name: 'New Experience', value: 'Fast Loading' },
      velocity: {name: 'Velocidade', value: '600 MB/s'},
      description: '',
      features: { resolution: '1080P Resolution', hdr: 'HDR Technology', fps: 60, tecnologia: 'Ray Tracing' }
    },
  },

]

export { dataUserProfile, consolesPlaystation, advertising }