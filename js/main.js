// Inicio da modal
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalGallery = document.getElementById("modal-gallery");
    const closeModal = document.getElementsByClassName("close")[0];

    const projects = [
        {
            id: 1,
            title: "Jogo-da-Forca 2.0",
            description: "Descrição detalhada do projeto 1.",
            images: [
                "../images/Project/hangman-game.png",
                "../images/Project/hangman-game2.png",
                "../images/Project/hangman-game3.png",
                "../images/Project/hangman-game4.png",
                "../images/Project/hangman-game5.png",
                "../images/Project/hangman-game6.png",
                "../images/Project/hangman-game7.png",
            ]
        },
        {
            id: 2,
            title: "Projeto 2",
            description: "Descrição detalhada do projeto 2.",
            images: ["../images/project1.png"]
        }
    ];

    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', () => {
            const projectId = project.getAttribute('data-project');
            const projectData = projects.find(p => p.id == projectId);
            
            modalTitle.textContent = projectData.title;
            modalDescription.textContent = projectData.description;
            modalGallery.innerHTML = '';
            projectData.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = projectData.title;
                img.className = 'modal-img';
                modalGallery.appendChild(img);
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
