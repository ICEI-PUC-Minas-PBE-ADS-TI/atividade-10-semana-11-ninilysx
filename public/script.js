const data = {
    "animes": [
      {
        "id": 1,
        "nome": "Shingeki no Kyojin",
        "estreia": "7 de abril de 2013",
        "categoria": ["Ação", "Aventura", "Drama", "Fantasia"],
        "imagem": "./img/attack-icon.jpg",
        "imagemDet": "./img/aot-det.jpg",
        'criador': "Hajime Isayama",
        "descricao": "A humanidade vive em cidades muradas, oprimida pelos terríveis titãs devoradores de homens. Mas um esquadrão de soldados luta para sobreviver em meio ao caos e a carnificina. Entre eles, o determinado Eren jura exterminar todos os monstros. (Fonte: Google)",
        "assistido": true
      },
      {
        "id": 2,
        "nome": "Kusuriya No Hitorigoto",
        "estreia": "22 de outubro de 2023",
        "categoria": ["Drama", "Shoujo"],
        "imagem": "./img/diarios-icon.jpg",
        "imagemDet": "./img/diaries-det.jpg",
        'criador': "Natsu Hyūga",
        "descricao": "The Apothecary Diaries é uma cativante série de anime que junta mistério, intriga histórica e ciência médica no mundo ricamente detalhado de uma corte imperial. (Fonte: Crunchyroll)",
        "assistido": true
      },
      {
        "id": 3,
        "nome": "Jujutsu Kaisen",
        "estreia": "2 de outubro de 2020",
        "categoria": ["Drama", "Ação", "Fantasia", "Shounen"],
        "imagem": "./img/jujutsu-icon.jpg",
        "imagemDet": "./img/jjk-det.jpg",
        'criador': "Gege Akutami",
        "descricao": "A história acompanha Yuji Itadori, um estudante que engole o dedo de Sukuna — o Rei das Maldições — e entra para o mundo dos feiticeiros jujutsu para combater espíritos malignos. (Fonte: Google)",
        "assistido": true
      },
      {
        "id": 4,
        "nome": "Dungeon Meshi",
        "estreia": "4 de janeiro de 2024",
        "categoria": ["Ficção científica", "Fantasia", "Shounen"],
        "imagem": "./img/dungeon-icon.jpg",
        "imagemDet": "./img/dungeon-det.jpg",
        'criador': "Ryoko Kui",
        "descricao": "A história segue o cavaleiro Laios e seu grupo, que decidem cozinhar e comer os monstros da masmorra para sobreviver e salvar sua irmã, devorada por um dragão. (Fonte: Google)",
        "assistido": true
      }
    ]
  }

  const container = document.getElementById('container-animes');

  
  function criarCards(animes){
    if (!container) return;

    animes.forEach(element => {

      const card = document.createElement('div');
      card.classList.add('cards-container');

      const containerImg = document.createElement('div');
      containerImg.classList.add('container-img');

      const img = document.createElement('img');
      img.src = element.imagem;

      const descricao = document.createElement('div');
      descricao.classList.add('desc');

      const nome = document.createElement('h3');
      nome.textContent = element.nome;

      const estreia = document.createElement('p');
      estreia.textContent = `Estreia: ${element.estreia}`;

      const containerGenero = document.createElement('div');
      containerGenero.classList.add('container-generos')

      containerGenero.textContent = element.categoria.join(', ');

      const desc = document.createElement('p');
      desc.textContent = element.descricao;

      descricao.appendChild(nome);
      descricao.appendChild(estreia);
      descricao.appendChild(containerGenero);
      descricao.appendChild(desc);

      containerImg.appendChild(img);

      card.appendChild(containerImg);
      card.appendChild(descricao);


      card.addEventListener('click', () =>{
        window.location.href = `detalhes.html?id=${element.id}`;
      })

      container.appendChild(card);
    });
  }

  criarCards(data.animes);

  const parametros = new URLSearchParams(window.location.search);
  const animeID = parametros.get('id');

  if (animeID) {
    const idSearch = Number(animeID);

    const findAnime = data.animes.find(anime => anime.id === idSearch);

    if(findAnime){

      const containerDetalhe = document.getElementById('container')
      const divIMG = document.getElementById('container-img')

      const img = document.createElement('img');
      img.src = findAnime.imagemDet;

      const nome = document.createElement('h2');
      nome.textContent = findAnime.nome;

      divIMG.appendChild(img);
      divIMG.appendChild(nome);

      const divDesc = document.getElementById('container-desc');

      const criador = document.createElement('p');
      criador.textContent = findAnime.criador;
      criador.classList.add('criador')

      const desc = document.createElement('p');
      desc.textContent = findAnime.descricao;

      const estreia = document.createElement('p');
      estreia.textContent = `Lançado em ${findAnime.estreia}`;

      divDesc.appendChild(criador);
      divDesc.appendChild(desc);
      divDesc.appendChild(estreia);

      containerDetalhe.appendChild(divIMG);
      containerDetalhe.appendChild(divDesc);

    } 
  }



  