//INICIO MODAL

// Array para Modal
const projects = [
    {
        id: 1,
        title: "Jogo-da-Forca 2.0",
        description: "Descrição detalhada do projeto 1.",
        images: [
            {
                src: "../images/Project/hangman-game.png",
                desc: "Tela do jogo principal onde jogamos contra o tempo, temos 5 vidas inicial, padrão de 6 tentativas e placar de pontos que pode ser trocado pela tecla 'Dica' conforme descrito no Pergaminho de Regras."
            },
            {
                src: "../images/Project/hangman-game2.png",
                desc: "Este é o Pergaminho de Regras, cada jogador devera concordar com as Regras e digitar seu nome no jogo que ficará gravado ao lado do 'Tempo'."
            },
            {
                src: "../images/Project/hangman-game3.png",
                desc: "Este é o Painel de Menu, cada retangulo tem 10 fases clicando sobre um poderá ver onde parou, repetir as fases não lhe consede mais pontos."
            },
            {
                src: "../images/Project/hangman-game4.png",
                desc: "Painel Menu, ao passar o mouse sobre os retangulos é possível tirar o borrão e ver um easter egg, uma dica sobre umas das palavras chave da fase."
            },
            {
                src: "../images/Project/hangman-game5.png",
                desc: "Este é o Painel do Jogo Aleatório, nesse jogo você joga contra o tempo e com categorias aleatórias não seguem um padrão de dificuldade, nenhuma das palavras aqui é igual a do jogo principal."
            },
            {
                src: "../images/Project/hangman-game6.png",
                desc: "Pagina para elogios ou relatar algum problema que possa ocorrer durante o jogo."
            },
            {
                src: "../images/Project/hangman-game7.png",
                desc: "Uma modal usando bootstrap, para que a qualquer momento você possa relembrar as regras do jogo."
            }
        ]
    },
    {
        id: 2,
        title: "Projeto 2",
        description: "Descrição detalhada do projeto 2.",
        images: [
            { src: "../images/project1.png", desc: "Imagem 1 do Projeto 2" },
            { src: "../images/project1-2.png", desc: "Imagem 2 do Projeto 2" },
            { src: "../images/project1-3.png", desc: "Imagem 3 do Projeto 2" }
        ]
    }
    // Adicione mais projetos conforme necessário
];

const plusCards = [
    {
        id: 1,
        title: "CERTIFICADOS",
        description: "Descrição detalhada do projeto 2.",
        images: [
            { src: "./images/certificate/Front-end.png", desc: "Certificado Front-End" },
            { src: "./images/certificate/Back-end.png", desc: "Certificado Back-End" },
            { src: "./images/certificate/Computer-Science.png", desc: "Certificado Computer Science" },
            { src: "./images/certificate/Totvs-Certificate-Fluig.png", desc: "Certificado Totvs Fluig Dev Start" }
        ]
    },
    {
        id: 2,
        title: "PROJETOS TRYBE",
        description: "Projetos feitos na Trybe usados como 'prova' onde cada requisito contava pontos.",
        images: [
            { src: "./images/ptoject-Trybe/Trybewarts/Trybewarts.png", desc: "Projeto Trybewarts" },
            { src: "./images/ptoject-Trybe/Gerador-de-senha/Gerenciador-de-senha.png", desc: "Projeto Gerenciador de Senhas" },
            { src: "./images/ptoject-Trybe/TrybeTunes/TrybeTunes.png", desc: "Projeto TrybeTunes" }
        ]
    },
    {
        id: 3,
        title: "PROJETOS PESSOAIS",
        description: "Descrição detalhada do projeto 2.",
        images: [
            { src: "../images/Project/Jogo-da-Forca/hangman-game.png"},
            { src: "../images/Project/Jogo-da-Forca/death.png", desc: "Jogo da Forca 2.0" }
        ]
    },
    {
        id: 4,
        title: "FREELANCER",
        description: "Descrição detalhada do projeto 2.",
        images: [
            { src: "./images/freelancer/Freelance-Listech.png", desc: "Projeto Freelancer Listech Informática." }
        ]
    },
    {
        id: 5,
        title: "PROTHEUS",
        description: "Descrição detalhada do projeto 2.",
        images: [
            { src: "../images/protheus/Protheus.png", desc: "ERP Protheus" }
        ]
    }
    
]

const sobreModal = [

    {
        id: 2,
        title: "Eu minha Noiva e o Marlon",
        description: "Momentos de familia.",
        images: [
            { src: "../images/profile/sobre/marlon-sil-eu2.jpg"},
        ]
    },
    {
        id: 3,
        title: "Minha Noiva e Eu",
        description: "Mais sobre minha familia.",
        images: [
            { src: "../images/profile/sobre/noiva-sil.jpg"},
            { src: "../images/profile/sobre/noiva-sil2.jpg"}
        ]
    },
    {
        id: 4,
        title: "Border Collie!",
        description: "Mais sobre Border Collie.",
        images: [
            { src: "../images/profile/sobre/marlon-e-eu2.jpg"},
            { src: "../images/profile/sobre/dogs5.jpg"},
            { src: "../images/profile/sobre/dogs3.jpg"},
            { src: "../images/profile/sobre/dogs2.jpg"},
            { src: "../images/profile/sobre/dogs4.jpg"},
            
        ]
    },
    {
        id: 5,
        title: "Meu Hobby!",
        description: "Mais sobre hardware.",
        images: [
            { src: "../images/profile/sobre/hardware4.jpg"},
            { src: "../images/profile/sobre/hardware5.jpg"},
            { src: "../images/profile/sobre/hardware6.jpg"},
            { src: "../images/profile/sobre/hardware7.jpg"},
        ]
    },
    {
        id: 6,
        title: "Trybe!",
        description: "mais sobre montagem de Desktop.",
        images: [
            { src: "../images/profile/sobre/Trybe.jpg"},
            { src: "../images/profile/sobre/Trybe2.jpg"},
            { src: "../images/profile/sobre/Trybe3.jpg"}
        ]
    },
    {
        id: 7,
        title: "PROTHEUS",
        description: "mais sobre montagem de Desktop.",
        images: [
            { src: "../images/profile/sobre/multitecnica2.jpg"},
            { src: "../images/profile/sobre/multitecnica3.jpg"},
        ]
    }
    
]
// Fim do Array para Modal

// Inicio da modal
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalGallery = document.getElementById("modal-gallery");
    const closeModal = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', () => {
            const projectId = project.getAttribute('data-project');
            const projectData = projects.find(p => p.id == projectId);

            modalTitle.textContent = projectData.title;
            modalDescription.textContent = projectData.description;
            modalGallery.innerHTML = '';
            projectData.images.forEach(img => {
                const imgElement = document.createElement('img');
                imgElement.src = img.src;
                imgElement.alt = projectData.title;
                imgElement.className = 'modal-img';

                const imgDesc = document.createElement('p');
                imgDesc.textContent = img;
                imgDesc.className = 'modal-img-desc';

                modalGallery.appendChild(imgElement);
                modalGallery.appendChild(imgDesc);
            });

            modal.style.display = "block";
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
// Fim da modal

// Modal 2
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalGallery = document.getElementById("modal-gallery");
    const closeModal = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.plusCard').forEach(plusCard => {
        plusCard.addEventListener('click', () => {
            const plusCardId = plusCard.getAttribute('data-project');
            const projectData = plusCards.find(p => p.id == plusCardId);

            modalTitle.textContent = projectData.title;
            modalDescription.textContent = projectData.description;
            modalGallery.innerHTML = '';
            projectData.images.forEach(img => {
                const imgElement = document.createElement('img');
                imgElement.src = img.src;
                imgElement.alt = projectData.title;
                imgElement.className = 'modal-img';

                const imgDesc = document.createElement('p');
                imgDesc.textContent = img.desc;
                imgDesc.className = 'modal-img-desc';

                modalGallery.appendChild(imgElement);
                modalGallery.appendChild(imgDesc);
            });

            modal.style.display = "block";
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
// Fim da modal 2

// Modal 3
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalGallery = document.getElementById("modal-sobre-gallery");
    const closeModal = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.sobreMim').forEach(sobreMim => {
        sobreMim.addEventListener('click', () => {
            const sobreMimId = sobreMim.getAttribute('data-project');
            const projectData = sobreModal.find(p => p.id == sobreMimId);

            modalTitle.textContent = projectData.title;
            modalDescription.textContent = projectData.description;
            modalGallery.innerHTML = '';
            projectData.images.forEach(img => {
                const imgElement = document.createElement('img');
                imgElement.src = img.src;
                imgElement.alt = projectData.title;
                imgElement.className = 'modal-imagem';

                const imgDesc = document.createElement('p');
                imgDesc.textContent = img.desc;
                imgDesc.className = 'modal-img-desc';

                modalGallery.appendChild(imgElement);
                modalGallery.appendChild(imgDesc);
            });

            modal.style.display = "block";
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
// Fim da modal 3

//FIM MODAL

//INICIO CARD VIEW 

//Inicio Array Card
const projectCard = [
    {
        id: 1,
        title: 'Projeto 1',
        description: 'Uma breve descrição do Projeto 1.',
        details: 'Aqui está uma descrição mais detalhada do Projeto 1...',
        image: "../images/Project/Jogo-da-Forca/hangman-game.png"
    },
    {
        id: 2,
        title: 'Projeto 2',
        description: 'Uma breve descrição do Projeto 2.',
        details: 'Aqui está uma descrição mais detalhada do Projeto 2...',
        image: "../images/ptoject-Trybe/Trybewarts/Trybewarts.png"
    },
    {
        id: 3,
        title: 'Projeto 3',
        description: 'Uma breve descrição do Projeto 3.',
        details: 'Aqui está uma descrição mais detalhada do Projeto 3...',
        image: "images/Project/project3.png"
    },
    {
        id: 4,
        title: 'Projeto 4',
        description: 'Uma breve descrição do Projeto 4.',
        details: 'Aqui está uma descrição mais detalhada do Projeto 4...',
        image: "images/Project/project4.png"
    }
    // Adicione mais projetos conforme necessário
];
//Fim Array Card

//Inicio Card-View functions


function loadProjectCards() {
    const projectCardsContainer = document.getElementById('project-cards');
    projectCard.forEach(project => {
        const card = document.createElement('div');
        card.className = 'plusCard';
        card.setAttribute('data-id', project.id);
        card.innerHTML = `
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
            </div>
        `;
        projectCardsContainer.appendChild(card);

        card.addEventListener('click', () => showProjectDetails(project.id));
    });
}

function showProjectDetails(projectId) {
    const projectDetailsContainer = document.getElementById('project-details');
    const project = projectCard.find(p => p.id === projectId);

    if (!project) {
        console.error(`Projeto com ID ${projectId} não encontrado.`);
        return;
    }

    if (projectDetailsContainer.dataset.currentId == projectId) {
        projectDetailsContainer.classList.add('d-none');
        projectDetailsContainer.removeAttribute('data-current-id');
        return;
    }

    projectDetailsContainer.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.details}</p>
    `;

    projectDetailsContainer.dataset.currentId = projectId;
    projectDetailsContainer.classList.remove('d-none');
}

document.addEventListener('DOMContentLoaded', loadProjectCards);

//Fim Card-View functions

// FIM CARD VIEW