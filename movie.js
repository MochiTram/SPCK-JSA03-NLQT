let animes_area = document.getElementById("movie-area")

function initialize() {
    fetchAnimes()
}

async function fetchAnimes() {
    let data = await fetch('data.json') //đổi link API thành file json
        .then(response => response.json())
        .then(json => json)
    console.log(data)
    loadAnimes(data)
}

function loadAnimes(data) {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        let output = `
        <div class="theme col-4 movies">
        <div class="movie">
            <h2 class="movie-title">${data[i].name}</h2>
            <img src="${data[i].image}" alt="" class="movie-img">
            <div class="movie-bottom">
                <h3 class="movie-des">${data[i].description.substr(0, 75)}...</h3>
                <button class="trailer btn">Watch trailer now!</button>
            </div>
        </div>
    </div>`
        animes_area.innerHTML += output
    }
}

initialize();