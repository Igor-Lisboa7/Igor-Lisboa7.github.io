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

// Inicio Modal About
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
// Final modal About
