const apiKey = "25c941c9f1475b7571d546c04fc8c70e";
const imgApi = "https://image.tmdb.org/t/p/w1280";
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const form = document.getElementById("search-form");
const query = document.getElementById("search-input");
const result = document.getElementById("projetos");

let page = 1;
let isSearching = false;


function createCard(image, title, overview, url) {
    const cardTemplate = `
        <div class="column">
            <div class="card">
                <a class="card-media" >
                    <img src="${image}" alt="${title}" width="100%" />
                </a>
                <div class="card-content">
                    <div class="card-header">
                        <div class="left-content">
                        <h3 style="font-weight: 600">${title}</h3>
                        </div>
                    <div class="right-content">
                        <a href="${url}" target="_blank" class="card-btn">Visualizar projeto</a>
                    </div>
                </div>
                <div class="info">
                    ${overview || "Projeto em construção..."}
                </div>
            </div>
        </div>
    </div>
    `;
    return cardTemplate;
}

// Show results in page
function showResults(image, title, overview, url) {
    const newContent = createCard(image, title, overview, url);
    result.innerHTML += newContent || "<p>No results found.</p>";
}

// Handle search
async function handleSearch(e) {
    e.preventDefault();
    const searchTerm = query.value.trim();
    if (searchTerm) {
        isSearching = true;
        clearResults();
        const newUrl = `${searchUrl}${searchTerm}&page=${page}`;
        await fetchAndShowResult(newUrl);
        query.value = "";
    }
}

// Event listeners
form.addEventListener('submit', handleSearch);




showResults('img/climatempo.png','ClimaTempo'
,' Desenvolvi um site interativo para consulta de clima e tempo. Utilizando HTML, CSS e JavaScript, é possível obter informações atualizadas sobre temperatura, umidade e velocidade do vento de qualquer cidade ou país. O site utiliza a API OpenWeather 3.0 para realizar as consultas e apresenta os resultados de forma amigável. Destaco minhas habilidades em desenvolvimento web, integração de APIs e manipulação dinâmica do HTML.'
,'https://climatempo-sable.vercel.app/');