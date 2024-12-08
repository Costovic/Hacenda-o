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

    const params = new URLSearchParams(window.location.search);
    const busqueda = params.get("busqueda");
    const resultadosContainer = document.getElementById("resultados-container");

    let resultados = noticias.filter(noticia => 
        noticia.titulo.toLowerCase().includes(busqueda) ||
        noticia.contenido.toLowerCase().includes(busqueda)
    );

    if (resultados.length) {
        resultados.forEach(noticia => {
            resultadosContainer.innerHTML += `
                <div class="col">
                    <div class="card h-100 shadow-sm">
                        <img src="${noticia.imagen}" class="card-img-top" alt="Artículo">
                        <div class="card-body">
                            <h5 class="card-title">${noticia.titulo}</h5>
                            <p class="card-text">${noticia.contenido.slice(0, 100)}...</p>
                            <a href="noticia.html?id=${noticia.id}" class="btn btn-primary">Leer más</a>
                        </div>
                    </div>
                </div>
            `;
        });
    } else {
        resultadosContainer.innerHTML = "<p class='text-center'>No se encontraron resultados.</p>";
    }
});