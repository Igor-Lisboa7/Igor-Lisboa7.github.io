//INICIO CARD VIEW PAGINA PROJETOS
document.addEventListener('DOMContentLoaded', function () {

    const projects = [
        {
            id: 0,
            title: 'Jogo da Forca 2.0',
            description: 'Leia atentamente as regras na "Home Page" e tente acertar os mais de 600 desafios, sendo eles 500 subida de nível e mais de 100 no modo aleatório...',
            details: 'Aqui está uma descrição mais detalhada do Projeto 0...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/projects/personal-project/Jogo-da-Forca/hangman-game.png"
        },
        {
            id: 1,
            title: 'Projeto 1',
            description: 'Uma breve descrição do Projeto 1.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 1...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/projects/personal-project/Jogo-da-Forca/death.png"
        },
        {
            id: 2,
            title: 'Projeto 2',
            description: 'Uma breve descrição do Projeto 2.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 2...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/projects/personal-project/Jogo-da-Forca/hangman-game.png"
        },
        {
            id: 3,
            title: 'Projeto 3',
            description: 'Uma breve descrição do Projeto 3.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 3...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/projects/personal-project/Jogo-da-Forca/hangman-game4.png"
        },
        {
            id: 4,
            title: 'Projeto 4',
            description: 'Uma breve descrição do Projeto 4.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 4...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/projects/personal-project/Jogo-da-Forca/hangman-game5.png"
        },
        {
            id: 5,
            title: 'Projeto 5',
            description: 'Uma breve descrição do Projeto 5.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 5...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/projects/ptoject-Trybe/Trybewarts/Trybewarts.png"
        },
        {
            id: 6,
            title: 'Projeto 6',
            description: 'Uma breve descrição do Projeto 6.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 6...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/projects/ptoject-Trybe/TrybeTunes/TrybeTunes.png"
        },
        {
            id: 7,
            title: 'Projeto 7',
            description: 'Uma breve descrição do Projeto 7.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 7...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/projects/ptoject-Trybe/Gerador-de-senha/Gerenciador-de-senha.png"
        },
        {
            id: 8,
            title: 'Projeto 8',
            description: 'Uma breve descrição do Projeto 8.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 8...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/projects/ptoject-Trybe/Trybewarts/Trybewarts.png"
        },
        {
            id: 9,
            title: 'Projeto 9',
            description: 'Uma breve descrição do Projeto 9.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 9...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/projects/ptoject-Trybe/Trybewarts/Trybewarts.png"
        },
        {
            id: 10,
            title: 'Projeto 10',
            description: 'Uma breve descrição do Projeto 10.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 10...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/projects/freelancer/Freelance-Listech.png"
        },
        {
            id: 11,
            title: 'Projeto 11',
            description: 'Uma breve descrição do Projeto 11.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 11...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/projects/ptoject-Trybe/TrybeTunes/TrybeTunes.png"
        },
        {
            id: 12,
            title: 'Projeto 12',
            description: 'Uma breve descrição do Projeto 12.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 12...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/projects/ptoject-Trybe/TrybeTunes/TrybeTunes.png"
        },
        {
            id: 13,
            title: 'Projeto 13',
            description: 'Uma breve descrição do Projeto 13.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 13...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/totvs/protheus/Protheus.png"
        },
        {
            id: 14,
            title: 'Projeto 14',
            description: 'Uma breve descrição do Projeto 14.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 14...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/totvs/fluig/fluig.png"
        },
        {
            id: 15,
            title: 'Projeto 15',
            description: 'Uma breve descrição do Projeto 15.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 15...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/totvs/protheus-fluig.png"
        },
        {
            id: 16,
            title: 'Projeto 16',
            description: 'Uma breve descrição do Projeto 16.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 16...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/totvs/protheus-fluig.png"
        },
        {
            id: 17,
            title: 'Projeto 16',
            description: 'Uma breve descrição do Projeto 16.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 16...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/totvs/protheus-fluig.png"
        },
        {
            id: 18,
            title: 'Projeto 16',
            description: 'Uma breve descrição do Projeto 16.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 16...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/totvs/protheus-fluig.png"
        },
        {
            id: 19,
            title: 'Projeto 16',
            description: 'Uma breve descrição do Projeto 16.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 16...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/totvs/protheus-fluig.png"
        },
        {
            id: 20,
            title: 'Projeto 16',
            description: 'Uma breve descrição do Projeto 16.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 16...',
            details2: 'Nos confins do universo, onde as estrelas dançam em galáxias distantes e o tempo se desdobra em dimensões desconhecidas, há um mistério que perdura desde tempos imemoriais. Os sábios dos planetas ancestrais contam histórias de uma civilização antiga, cujas ruínas perdidas são testemunhas silenciosas de um passado glorioso e de uma queda catastrófica. Entre os destroços de templos esquecidos, encontra-se um artefato de poder incomensurável, guardado por guardiões espirituais que há muito transcenderam a matéria física.',
            image: "/src/assets/images/totvs/protheus-fluig.png"
        }
    ];

    const projectImages = [
        {
            projectId: 0,
            images: [
                "/src/assets/images/projects/personal-project/Jogo-da-Forca/hangman-game.png",
                "/src/assets/images/projects/personal-project/Jogo-da-Forca/death.png",
                "/src/assets/images/projects/personal-project/Jogo-da-Forca/hangman-game4.png",
                "/src/assets/images/totvs/fluig/fluig.png",
                "/src/assets/images/totvs/fluig/fluig.png",
                "/src/assets/images/totvs/fluig/fluig.png",
                "/src/assets/images/totvs/fluig/fluig.png"
            ]
        },
        {
            projectId: 1,
            images: [
                "/src/assets/images/projects/personal-project/Jogo-da-Forca/hangman-game.png",
                "/src/assets/images/projects/personal-project/Jogo-da-Forca/death.png",
                "/src/assets/images/projects/personal-project/Jogo-da-Forca/hangman-game4.png",
                "/src/assets/images/totvs/fluig/fluig.png",
                "/src/assets/images/totvs/fluig/fluig.png",
                "/src/assets/images/totvs/fluig/fluig.png",
                "/src/assets/images/totvs/fluig/fluig.png"
            ]
        },
        // ... outras imagens de projetos
    ];

    const projectList1 = document.getElementById('project-list-1');
    const projectList2 = document.getElementById('project-list-2');
    const projectList3 = document.getElementById('project-list-3');
    const projectList4 = document.getElementById('project-list-4');


    // Inicializa o container-0 como display: flex
    const container0 = document.getElementById('cubo');

    // Itera sobre cada projeto no array de projetos
    projects.forEach((project, index) => {
        // Cria um elemento de lista para o projeto
        let listItem = document.createElement('li');
        listItem.classList.add('list-item');
        listItem.classList.add('current-item');

        // Cria um elemento div para o cartão do projeto e define seu conteúdo HTML
        let card = document.createElement('div');

        card.classList.add('project-item');
        card.dataset.projectId = project.id;
        card.innerHTML = `
            <img src="${project.image}" class="card-img-top">
            <div class="card-body2">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
            </div>
        `;

        // Cria um elemento div para os detalhes do projeto e define seu conteúdo HTML
        let details = document.createElement('div');
        details.classList.add('project-details');
        details.innerHTML = `
        <div class="details-wrapper">
            <div class="details-left">
                <h5>${project.title}</h5>
                <p>${project.details2}</p>
            </div>
            <div class="details-right">
                <div id="carousel-${project.id}" class="carousel">
                    <button class="prev">❮</button>
                    <div class="carousel-images"></div>
                    <button class="next">❯</button>
                </div>
            </div>
            <div class="details-button">
            <button class="button">X</button>
            </div>
        </div>
    `;

        // Encontra o conjunto de imagens associado ao projeto atual
        let projectImagesData = projectImages.find(img => img.projectId === project.id);
        if (projectImagesData) {
            // Seleciona a div onde as imagens do carrossel serão inseridas
            let carouselImagesDiv = details.querySelector(`#carousel-${project.id} .carousel-images`);
            // Adiciona cada imagem ao carrossel
            projectImagesData.images.forEach((img, idx) => {
                let imgElement = document.createElement('img');
                imgElement.src = img;
                if (idx === 0) imgElement.classList.add('active'); // Define a primeira imagem como ativa
                carouselImagesDiv.appendChild(imgElement);
            });
        }

        // Adiciona o cartão e os detalhes do projeto ao item da lista
        listItem.appendChild(card);
        listItem.appendChild(details);

        // Distribui os projetos nas diferentes listas com base no índice
        if (index < 5) {
            projectList1.appendChild(listItem);
        } else if (index < 10) {
            projectList2.appendChild(listItem);
        } else if (index < 15) {
            projectList3.appendChild(listItem);
        } else {
            projectList4.appendChild(listItem);
        }


        // Adiciona um evento de clique ao cartão para mostrar/ocultar os detalhes do projeto
        card.addEventListener('click', function () {
            let currentDetails = listItem.querySelector('.project-details');
            let allDetails = document.querySelectorAll('.project-details');

            if (currentDetails.style.display === 'none' || currentDetails.style.display === '') {
                // Oculta todos os detalhes de projeto
                allDetails.forEach(detail => detail.style.display = 'none');
                // Mostra os detalhes do projeto atual
                currentDetails.style.display = 'block';
            } else {
                // Oculta os detalhes do projeto atual
                currentDetails.style.display = 'none';
            }
        });
    });

    // Seleciona todos os elementos com a classe 'container-item'
    const containerItems = document.querySelectorAll('.container-item');

    // Adiciona um evento de clique a cada item do container para mostrar/ocultar seu conteúdo
    containerItems.forEach(containerItem => {
        containerItem.addEventListener('click', function () {
            const containerId = this.dataset.containerId;
            const content = document.getElementById(`content-${containerId}`);
            const allContents = document.querySelectorAll('.container-content');

            if (content.style.display === 'none' || content.style.display === '') {
                // Oculta todos os conteúdos de container
                allContents.forEach(cont => cont.style.display = 'none');
                // Mostra o conteúdo do container atual
                content.style.display = 'block';
            } else {
                // Oculta o conteúdo do container atual
                content.style.display = 'none';
            }

            // Define o estilo de display do container-0 com base no estado do conteúdo
            if (content.style.display == 'none') {
                container0.style.display = 'flex';
            } else {
                container0.style.display = 'block';
            }


        });

        // Adiciona um evento de clique no documento para fechar os detalhes do projeto ao clicar fora deles
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.project-item') && !e.target.closest('.project-details')) {
                document.querySelectorAll('.project-details').forEach(detail => {
                    detail.style.display = 'none';
                });
            }
        });

        document.addEventListener('click', function (e) {
            if (e.target.classList.contains('button')) {
                const details = e.target.closest('.project-details');
                if (details) {
                    details.style.display = 'none';
                }
            }
        });

    });

    // Adiciona um evento de clique ao documento para manipular o carrossel de imagens
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('prev') || e.target.classList.contains('next')) {
            const carousel = e.target.closest('.carousel');
            const imagesDiv = carousel.querySelector('.carousel-images');
            const images = Array.from(imagesDiv.children);
            const activeIndex = images.findIndex(img => img.classList.contains('active'));
            images[activeIndex].classList.remove('active');

            let newIndex;
            if (e.target.classList.contains('prev')) {
                newIndex = (activeIndex - 1 + images.length) % images.length;
            } else {
                newIndex = (activeIndex + 1) % images.length;
            }

            images[newIndex].classList.add('active');
        }
    });

    document.querySelectorAll('.container-item').forEach(card => {
        card.addEventListener('click', function () {
            card.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    document.querySelectorAll('.container-content').forEach(container => {
        let currentItem = 0;

        const list = container.querySelector('.list-item');
        const items = list.querySelectorAll('.projetc-item');
        const maxItems = items.length;

        const updateScroll = (isLeft) => {
            if (isLeft) {
                currentItem -= 1;
            } else {
                currentItem += 1;
            }

            if (currentItem >= maxItems) {
                currentItem = 0;
            }

            if (currentItem < 0) {
                currentItem = maxItems - 1;
            }

            list.style.transform = `translateX(-${currentItem * 100}%)`;
        };

        container.querySelector('.arrow-left').addEventListener('click', () => {
            updateScroll(true);
        });

        container.querySelector('.arrow-right').addEventListener('click', () => {
            updateScroll(false);
        });
    });

});
// FIM CARD VIEW PAGINA PROJETOS

//INICIO VIEW - CLASS NONE PAGINA SOBRE
document.addEventListener('DOMContentLoaded', function () {
    const titleH2s = document.querySelectorAll('.title-h2 h2');

    titleH2s.forEach(titleH2 => {
        titleH2.addEventListener('click', function () {
            const content = this.nextElementSibling;

            // Fecha todas as divs .none que não sejam a clicada
            document.querySelectorAll('.title-h2 .none').forEach(item => {
                if (item !== content) {
                    item.style.display = 'none';
                }
            });

            // Alterna a visibilidade da div .none correspondente ao heading clicado
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});

//FINAL VIEW - CLASS NONE PAGINA SOBRE

