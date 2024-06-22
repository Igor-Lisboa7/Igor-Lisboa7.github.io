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

document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            id: 0,
            title: 'Projeto 0',
            description: 'Uma breve descrição do Projeto 0.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 0...',
            image: "../images/Project/Jogo-da-Forca/hangman-game.png"
        },
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
            image: "../images/Project/Jogo-da-Forca/hangman-game.png"
        },
        {
            id: 4,
            title: 'Projeto 4',
            description: 'Uma breve descrição do Projeto 4.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 4...',
            image: "../images/ptoject-Trybe/Trybewarts/Trybewarts.png"
        },
        {
            id: 5,
            title: 'Projeto 5',
            description: 'Uma breve descrição do Projeto 5.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 5...',
            image: "../images/Project/Jogo-da-Forca/hangman-game.png"
        },
        {
            id: 6,
            title: 'Projeto 6',
            description: 'Uma breve descrição do Projeto 6.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 6...',
            image: "../images/ptoject-Trybe/Trybewarts/Trybewarts.png"
        },
        {
            id: 7,
            title: 'Projeto 7',
            description: 'Uma breve descrição do Projeto 7.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 7...',
            image: "../images/Project/Jogo-da-Forca/hangman-game.png"
        },
        {
            id: 8,
            title: 'Projeto 8',
            description: 'Uma breve descrição do Projeto 8.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 8...',
            image: "../images/ptoject-Trybe/Trybewarts/Trybewarts.png"
        },
        {
            id: 9,
            title: 'Projeto 9',
            description: 'Uma breve descrição do Projeto 9.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 9...',
            image: "../images/Project/Jogo-da-Forca/hangman-game.png"
        },
        {
            id: 10,
            title: 'Projeto 10',
            description: 'Uma breve descrição do Projeto 10.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 10...',
            image: "../images/ptoject-Trybe/Trybewarts/Trybewarts.png"
        },
        {
            id: 11,
            title: 'Projeto 11',
            description: 'Uma breve descrição do Projeto 11.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 11...',
            image: "../images/Project/Jogo-da-Forca/hangman-game.png"
        },
        {
            id: 12,
            title: 'Projeto 12',
            description: 'Uma breve descrição do Projeto 12.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 12...',
            image: "../images/ptoject-Trybe/Trybewarts/Trybewarts.png"
        },
        {
            id: 13,
            title: 'Projeto 13',
            description: 'Uma breve descrição do Projeto 13.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 13...',
            image: "../images/Project/Jogo-da-Forca/hangman-game.png"
        },
        {
            id: 14,
            title: 'Projeto 14',
            description: 'Uma breve descrição do Projeto 14.',
            details: 'Aqui está uma descrição mais detalhada do Projeto 14...',
            image: "../images/ptoject-Trybe/Trybewarts/Trybewarts.png"
        }
    ];

    const projectList1 = document.getElementById('project-list-1');
    const projectList2 = document.getElementById('project-list-2');
    const projectList3 = document.getElementById('project-list-3');

    // Distribuir projetos entre as listas
    projects.forEach((project, index) => {
        let listItem = document.createElement('li');
        listItem.classList.add('list-item');

        let card = document.createElement('div');
        card.classList.add('project-item');
        card.dataset.projectId = project.id;
        card.innerHTML = `
            <img src="${project.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
            </div>
        `;

        let details = document.createElement('div');
        details.classList.add('project-details');
        details.innerHTML = `
            <h5>${project.title}</h5>
            <p>${project.details}</p>
        `;
        
        listItem.appendChild(card);
        listItem.appendChild(details);

        if (index < 5) {
            projectList1.appendChild(listItem);
        } else if (index < 10) {
            projectList2.appendChild(listItem);
        } else {
            projectList3.appendChild(listItem);
        }

        card.addEventListener('click', function () {
            let currentDetails = listItem.querySelector('.project-details');
            let allDetails = document.querySelectorAll('.project-details');
            
            // Toggle the display of the clicked card's details
            if (currentDetails.style.display === 'none' || currentDetails.style.display === '') {
                allDetails.forEach(detail => detail.style.display = 'none');
                currentDetails.style.display = 'block';
            } else {
                currentDetails.style.display = 'none';
            }
        });
    });

    const containerItems = document.querySelectorAll('.container-item');
    
    containerItems.forEach(containerItem => {
        containerItem.addEventListener('click', function () {
            const containerId = this.dataset.containerId;
            const content = document.getElementById(`content-${containerId}`);
            const allContents = document.querySelectorAll('.container-content');

            if (content.style.display === 'none' || content.style.display === '') {
                allContents.forEach(cont => cont.style.display = 'none');
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
// FIM CARD VIEW