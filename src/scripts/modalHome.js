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
// Fim da modal Home
