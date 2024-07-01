// Inicio array para Modal
const sobreModal = [

    {
        id: 2,
        title: "Eu minha Noiva e o Marlon",
        description: "Momentos de familia.",
        images: [
            { src: "../images/profile/sobre/marlon-sil-eu2.jpg" },
        ]
    },
    {
        id: 3,
        title: "Minha Noiva e Eu",
        description: "Mais sobre minha familia.",
        images: [
            { src: "../images/profile/sobre/noiva-sil.jpg" },
            { src: "../images/profile/sobre/noiva-sil2.jpg" }
        ]
    },
    {
        id: 4,
        title: "Border Collie!",
        description: "Mais sobre Border Collie.",
        images: [
            { src: "../images/profile/sobre/marlon-e-eu2.jpg" },
            { src: "../images/profile/sobre/dogs5.jpg" },
            { src: "../images/profile/sobre/dogs3.jpg" },
            { src: "../images/profile/sobre/dogs2.jpg" },
            { src: "../images/profile/sobre/dogs4.jpg" },

        ]
    },
    {
        id: 5,
        title: "Meu Hobby!",
        description: "Mais sobre hardware.",
        images: [
            { src: "../images/profile/sobre/hardware4.jpg" },
            { src: "../images/profile/sobre/hardware5.jpg" },
            { src: "../images/profile/sobre/hardware6.jpg" },
            { src: "../images/profile/sobre/hardware7.jpg" },
        ]
    },
    {
        id: 6,
        title: "Trybe!",
        description: "mais sobre montagem de Desktop.",
        images: [
            { src: "../images/profile/sobre/Trybe.jpg" },
            { src: "../images/profile/sobre/Trybe2.jpg" },
            { src: "../images/profile/sobre/Trybe3.jpg" }
        ]
    },
    {
        id: 7,
        title: "PROTHEUS",
        description: "mais sobre montagem de Desktop.",
        images: [
            { src: "../images/profile/sobre/multitecnica2.jpg" },
            { src: "../images/profile/sobre/multitecnica3.jpg" },
        ]
    }

]
// Final array para Modal

/// Inicio Modal About
document.addEventListener("DOMContentLoaded", () => {
    // Obtém o elemento com o ID "modal"
    const modal = document.getElementById("modal");
    // Obtém o elemento com o ID "modal-title"
    const modalTitle = document.getElementById("modal-title");
    // Obtém o elemento com o ID "modal-description"
    const modalDescription = document.getElementById("modal-description");
    // Obtém o elemento com o ID "modal-sobre-gallery"
    const modalGallery = document.getElementById("modal-sobre-gallery");
    // Obtém o primeiro elemento com a classe "close"
    const closeModal = document.getElementsByClassName("close")[0];

    // Adiciona um evento de clique a todos os elementos com a classe "sobreMim"
    document.querySelectorAll('.sobreMim').forEach(sobreMim => {
        sobreMim.addEventListener('click', () => {
            // Obtém o atributo "data-project" do elemento clicado
            const sobreMimId = sobreMim.getAttribute('data-project');
            // Encontra os dados do projeto correspondente ao ID
            const projectData = sobreModal.find(p => p.id == sobreMimId);

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
                imgElement.className = 'modal-imagem';

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
// Final modal About
