document.addEventListener("DOMContentLoaded", () => {
    const noticias = [
        {
            id: 1,
            titulo: "Compra esto en vez de esto | Version Liga Fantasy",
            contenido: "Aquí tienes algunos ejemplos y categorías que podrían encajar en ese contexto...",
            categoria: "Futbol",
            imagen: "https://www.jornadaperfecta.com/blog/wp-content/uploads/2019/12/laliga_sap1.jpg"
        },
        {
            id: 2,
            titulo: "El impacto del cambio climático",
            contenido: "Los expertos alertan sobre los efectos en la biodiversidad...",
            categoria: "Medio Ambiente",
            imagen: "https://via.placeholder.com/600x300"
        },
        {
            id: 3,
            titulo: "Nuevos descubrimientos en medicina",
            contenido: "Un avance en vacunas promete mejorar la salud mundial...",
            categoria: "Salud",
            imagen: "https://via.placeholder.com/600x300"
        }
    ];

    const destacadosContainer = document.getElementById("destacados-container");
    const recientesContainer = document.getElementById("recientes-container");

    // Cargar noticias destacadas
    noticias.slice(0, 2).forEach(noticia => {
        destacadosContainer.innerHTML += createCard(noticia);
    });

    // Cargar noticias recientes
    noticias.forEach(noticia => {
        recientesContainer.innerHTML += createCard(noticia);
    });

    // Función para crear tarjetas de noticias
    function createCard(noticia) {
        return `
            <div class="col">
                <div class="card h-100 shadow-sm">
                    <img src="${noticia.imagen}" class="card-img-top" alt="${noticia.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${noticia.titulo}</h5>
                        <p class="card-text">${noticia.contenido.slice(0, 100)}...</p>
                        <a href="noticia${noticia.id}.html" class="btn btn-primary">Leer más</a>
                    </div>
                </div>
            </div>
        `;
    }
});
