const videos = [
  {
    id: 1,
    name: 'Criação de Jogos com Defold - Aula 0',
    link: 'https://www.youtube.com/embed/AsVSeza6oJ4',
    uniqueId: 'AsVSeza6oJ4',
  }, {
    id: 2,
    name: 'Criação de Jogos com Defold - Aula 1',
    link: 'https://www.youtube.com/embed/zoQSkvN78og',
    uniqueId: 'zoQSkvN78og',
  }, {
    id: 3,
    name: 'Criação de Jogos com Defold - Aula 2',
    link: 'https://www.youtube.com/embed/fxtvfS8nqtc',
    uniqueId: 'fxtvfS8nqtc',
  }, {
    id: 4,
    name: 'Criação de Jogos com Defold - Aula 3',
    link: 'https://www.youtube.com/embed/vhCaNa5mMuM',
    uniqueId: 'vhCaNa5mMuM',
  }, {
    id: 5,
    name: 'Criação de Jogos com Defold - Aula 4',
    link: 'https://www.youtube.com/embed/HZqAS8iaEto',
    uniqueId: 'HZqAS8iaEto',
  }, {
    id: 6,
    name: 'Criação de Jogos com Defold - Aula 5',
    link: 'https://www.youtube.com/embed/jjiiRMb1zGM',
    uniqueId: 'jjiiRMb1zGM',
  }, {
    id: 7,
    name: 'Criação de Jogos com Defold - Aula 6',
    link: 'https://www.youtube.com/embed/mWo-OE9VDV4',
    uniqueId: 'mWo-OE9VDV4',
  }, {
    id: 8,
    name: 'Criação de Jogos com Defold - Aula 7',
    link: 'https://www.youtube.com/embed/GD-UtJLBqAQ',
    uniqueId: 'GD-UtJLBqAQ',
  }, {
    id: 9,
    name: 'Criação de Jogos com Defold - Aula 8',
    link: 'https://www.youtube.com/embed/yhRFnt0g418',
    uniqueId: 'yhRFnt0g418',
  }, {
    id: 10,
    name: 'Criação de Jogos com Defold - Aula 9',
    link: 'https://www.youtube.com/embed/4EqR7N1TAj',
    uniqueId: '4EqR7N1TAj',
  }, {
    id: 11,
    name: 'Criação de Jogos com Defold - Aula 10',
    link: 'https://www.youtube.com/embed/mzYptX8VdL0',
    uniqueId: 'mzYptX8VdL0',
  }, {
    id: 12,
    name: 'Criação de Jogos com Defold - Aula 11',
    link: 'https://www.youtube.com/embed/tBV_A3s34qU',
    uniqueId: 'tBV_A3s34qU',
  }, {
    id: 13,
    name: 'COMO O BOLSONARISMO CENSURA, INTIMIDA E PERSEGUE',
    link: 'https://www.youtube.com/embed/_L4AFuFfpqY',
    uniqueId: '_L4AFuFfpqY',
  }, {
    id: 14,
    name: 'A ASSEMBLEIA GERAL DA ONU EM 2020',
    link: 'https://www.youtube.com/embed/d6Rtk9Jxftw',
    uniqueId: 'd6Rtk9Jxftw',
  }, {
    id: 15,
    name: 'TUTORIAL: COMO INCENDIAR UM PAÍS',
    link: 'https://www.youtube.com/embed/Ivu_X_SoiwY',
    uniqueId: 'Ivu_X_SoiwY',
  }, {
    id: 16,
    name: 'PARA QUEM A MAMATA CONTINUA',
    link: 'https://www.youtube.com/embed/WtEPM1fZW4g',
    uniqueId: 'WtEPM1fZW4g',
  }, {
    id: 17,
    name: 'METEORO ENTREVISTA - CIRO GOMES',
    link: 'https://www.youtube.com/embed/IUzPLiovliA',
    uniqueId: 'IUzPLiovliA',
  }, {
    id: 18,
    name: 'TORTURADOR E MILITAR MEDÍOCRE',
    link: 'https://www.youtube.com/embed/ONcm04HQ0EU',
    uniqueId: 'ONcm04HQ0EU',
  }, {
    id: 19,
    name: 'DONALD GLOVER E A KKK NASCERAM NA MESMA CIDADE',
    link: 'https://www.youtube.com/embed/6xMZ1YZ7Mug',
    uniqueId: '6xMZ1YZ7Mug',
  }, {
    id: 20,
    name: 'A DITADURA TENTA REESCREVER A HISTÓRIA',
    link: 'https://www.youtube.com/embed/4Ya1Ptef-EQ',
    uniqueId: '4Ya1Ptef-EQ',
  }, {
    id: 21,
    name: 'PANTANAL: O QUE ESTÁ ACONTECENDO?',
    link: 'https://www.youtube.com/embed/q2e-yBGAYPM',
    uniqueId: 'q2e-yBGAYPM',
  }, {
    id: 22,
    name: 'QUEM É AUGUSTO HELENO',
    link: 'https://www.youtube.com/embed/Fywd0ji73Uw',
    uniqueId: 'Fywd0ji73Uw',
  }, {
    id: 23,
    name: '89 MIL',
    link: 'https://www.youtube.com/embed/TbG8SnNkqN4',
    uniqueId: 'TbG8SnNkqN4',
  }, {
    id: 24,
    name: 'STEVE BANNON: PRISÃO E CONTRADIÇÃO',
    link: 'https://www.youtube.com/embed/XCJ-R5jDbic',
    uniqueId: 'XCJ-R5jDbic',
  }, {
    id: 25,
    name: 'Trump x Biden: os 5 momentos que marcaram o caótico 1º debate presidencial',
    link: 'https://www.youtube.com/embed/0gCrxsZacH0',
    uniqueId: '0gCrxsZacH0',
  }, {
    id: 26,
    name: '\'Cala a boca, cara\': Trump e Biden fazem debate caótico',
    link: 'https://www.youtube.com/embed/e5TJdK8h1Rg',
    uniqueId: 'e5TJdK8h1Rg',
  }, {
    id: 27,
    name: '3 pontos polêmicos do discurso de Bolsonaro na ONU',
    link: 'https://www.youtube.com/embed/ucVPJiYdTJ0',
    uniqueId: 'ucVPJiYdTJ0',
  }, {
    id: 28,
    name: 'Quem ganha e quem perde com acordo histórico entre Israel e países do Golfo?',
    link: 'https://www.youtube.com/embed/RGxvUQDpGFY',
    uniqueId: 'RGxvUQDpGFY',
  }, {
    id: 29,
    name: 'As derrotas diplomáticas que o Brasil pode ter aceitado para ajudar Trump a se reeleger',
    link: 'https://www.youtube.com/embed/0HmlTYI9Nj0',
    uniqueId: '0HmlTYI9Nj0',
  }, {
    id: 30,
    name: '\'Brasil está de parabéns\' no meio ambiente, como diz Bolsonaro? O que pensa o mundo',
    link: 'https://www.youtube.com/embed/8p8Q8LytqJs',
    uniqueId: '8p8Q8LytqJs',
  }, {
    id: 31,
    name: 'Os 5 fatores que podem levar Trump a reverter desvantagem e vencer eleição nos EUA',
    link: 'https://www.youtube.com/embed/n0OuHLyHhQ4',
    uniqueId: 'n0OuHLyHhQ4',
  }, {
    id: 32,
    name: 'Como o Peru se tornou o país com a maior taxa de mortes por covid-19 no mundo',
    link: 'https://www.youtube.com/embed/3IcrMCmty64',
    uniqueId: '3IcrMCmty64',
  }, {
    id: 33,
    name: 'Trump quer vacina para covid-19 antes das eleições: entenda por que pressa é arriscada',
    link: 'https://www.youtube.com/embed/-B3YjFx-DjI',
    uniqueId: '-B3YjFx-DjI',
  }, {
    id: 34,
    name: 'Conheça a nova nota de R$ 200 e as cédulas mais valiosas do mundo',
    link: 'https://www.youtube.com/embed/c5akAwGH7bE',
    uniqueId: 'c5akAwGH7bE',
  }, {
    id: 35,
    name: 'A estratégia de Trump para virar o jogo e ganhar eleições nos EUA',
    link: 'https://www.youtube.com/embed/CDeuPWoHjlg',
    uniqueId: 'CDeuPWoHjlg',
  }, {
    id: 36,
    name: 'O ponto fraco do coronavírus que pode servir para neutralizá-lo',
    link: 'https://www.youtube.com/embed/49GnURELn5Q',
    uniqueId: '49GnURELn5Q',
  }, {
    id: 37,
    name: 'A Reunificação da Alemanha | Nerdologia',
    link: 'https://www.youtube.com/embed/bQJNWXHnu64',
    uniqueId: 'bQJNWXHnu64',
  }, {
    id: 38,
    name: 'A vida de Chadwick Boseman e suas facetas históricas | Nerdologia',
    link: 'https://www.youtube.com/embed/zGEMCObe5Ks',
    uniqueId: 'zGEMCObe5Ks',
  }, {
    id: 39,
    name: 'Como a Segunda Guerra Mundial terminou | Nerdologia',
    link: 'https://www.youtube.com/embed/qsPIMgS3BxI',
    uniqueId: 'qsPIMgS3BxI',
  }, {
    id: 40,
    name: 'O que é o fascismo? | Nerdologia',
    link: 'https://www.youtube.com/embed/kros-1kU1Qc',
    uniqueId: 'kros-1kU1Qc',
  }, {
    id: 41,
    name: 'A Gripe Espanhola de 1918 | Nerdologia',
    link: 'https://www.youtube.com/embed/_gm66nW1Jek',
    uniqueId: '_gm66nW1Jek',
  }, {
    id: 42,
    name: 'Hitler realmente morreu em 1945? | Nerdologia',
    link: 'https://www.youtube.com/embed/Sybj4fKjW58',
    uniqueId: 'Sybj4fKjW58',
  }, {
    id: 43,
    name: 'História da Guerra do Paraguai | Nerdologia',
    link: 'https://www.youtube.com/embed/F1cS5Fnvfyo',
    uniqueId: 'F1cS5Fnvfyo',
  }, {
    id: 44,
    name: 'A Peste Negra | Nerdologia',
    link: 'https://www.youtube.com/embed/Q87c4UBXTpY',
    uniqueId: 'Q87c4UBXTpY',
  }, {
    id: 45,
    name: 'As trincheiras da Primeira Guerra Mundial | Nerdologia',
    link: 'https://www.youtube.com/embed/Vl3mdST0blw',
    uniqueId: 'Vl3mdST0blw',
  }, {
    id: 46,
    name: 'Quem descobriu e de quem é a Antártida? | Nerdologia',
    link: 'https://www.youtube.com/embed/EusdmL4Ra7o',
    uniqueId: 'EusdmL4Ra7o',
  }, {
    id: 47,
    name: 'Watchmen e os distúrbios de Tulsa em 1921 | Nerdologia',
    link: 'https://www.youtube.com/embed/AIdUObVum2M',
    uniqueId: 'AIdUObVum2M',
  }, {
    id: 48,
    name: 'Pompéia e o vulcão Vesúvio | Nerdologia',
    link: 'https://www.youtube.com/embed/myYeDzmwvs4',
    uniqueId: 'myYeDzmwvs4',
  },
];

module.exports = { videos };
