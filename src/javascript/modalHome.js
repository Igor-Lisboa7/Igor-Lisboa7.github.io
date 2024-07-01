// Inicio array para Modal
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
            { src: "../images/Project/Jogo-da-Forca/hangman-game.png" },
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
// Final array para Modal 

// Inicio da modal Home
document.addEventListener("DOMContentLoaded", () => {
    // Obtém o elemento com o ID "modal"
    const modal = document.getElementById("modal");
    // Obtém o elemento com o ID "modal-title"
    const modalTitle = document.getElementById("modal-title");
    // Obtém o elemento com o ID "modal-description"
    const modalDescription = document.getElementById("modal-description");
    // Obtém o elemento com o ID "modal-gallery"
    const modalGallery = document.getElementById("modal-gallery");
    // Obtém o primeiro elemento com a classe "close"
    const closeModal = document.getElementsByClassName("close")[0];

    // Adiciona um evento de clique a todos os elementos com a classe "plusCard"
    document.querySelectorAll('.plusCard').forEach(plusCard => {
        plusCard.addEventListener('click', () => {
            // Obtém o atributo "data-project" do elemento clicado
            const plusCardId = plusCard.getAttribute('data-project');
            // Encontra os dados do projeto correspondente ao ID
            const projectData = plusCards.find(p => p.id == plusCardId);

            // Define o título do modal com o título do projeto
            modalTitle.textContent = projectData.title;
            // Define a descrição do modal com a descrição do projeto
            modalDescription.textContent = projectData.description;
            // Limpa o conteúdo da galeria do modal
            modalGallery.innerHTML = '';
            // Adiciona as imagens do projeto à galeria do modal
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

            // Exibe o modal
            modal.style.display = "block";
        });
    });

    // Adiciona um evento de clique ao elemento de fechar modal
    closeModal.addEventListener('click', () => {
        // Esconde o modal
        modal.style.display = "none";
    });

    // Adiciona um evento de clique à janela
    window.addEventListener('click', (event) => {
        // Verifica se o alvo do clique é o modal
        if (event.target == modal) {
            // Esconde o modal
            modal.style.display = "none";
        }
    });
});
// Fim da modal Home

