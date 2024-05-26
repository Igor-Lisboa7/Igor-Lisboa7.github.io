// Inicio da modal
const projects = [
    {
        id: 1,
        title: "Jogo-da-Forca 2.0",
        description: "Descrição detalhada do projeto 1.",
        images: [
            { src: "../images/Project/hangman-game.png", 
            desc: "Tela do jogo principal onde jogamos contra o tempo, temos 5 vidas inicial, padrão de 6 tentativas e placar de pontos que pode ser trocado pela tecla 'Dica' conforme descrito no Pergaminho de Regras." },
            { src: "../images/Project/hangman-game2.png", 
            desc: "Este é o Pergaminho de Regras, cada jogador devera concordar com as Regras e digitar seu nome no jogo que ficará gravado ao lado do 'Tempo'." },
            { src: "../images/Project/hangman-game3.png", 
            desc: "Este é o Painel de Menu, cada retangulo tem 10 fases clicando sobre um poderá ver onde parou, repetir as fases não lhe consede mais pontos." },
            { src: "../images/Project/hangman-game4.png", 
            desc: "Painel Menu, ao passar o mouse sobre os retangulos é possível tirar o borrão e ver um easter egg, uma dica sobre umas das palavras chave da fase." },
            { src: "../images/Project/hangman-game5.png", 
            desc: "Este é o Painel do Jogo Aleatório, nesse jogo você joga contra o tempo e com categorias aleatórias não seguem um padrão de dificuldade, nenhuma das palavras aqui é igual a do jogo principal." },
            { src: "../images/Project/hangman-game6.png", 
            desc: "Pagina para elogios ou relatar algum problema que possa ocorrer durante o jogo." },
            { src: "../images/Project/hangman-game7.png", 
            desc: "Uma modal usando bootstrap, para que a qualquer momento você possa relembrar as regras do jogo." }
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

// Fim da modal
