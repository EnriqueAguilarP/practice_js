const mainScreen = document.querySelector('.main-screen');
const pokeNombre = document.querySelector('.pokeNombre');
const pokeType = document.querySelector('.pokeType');
const pokeStatistics = document.querySelector('.pokeStatistics');
const pokeMoves = document.querySelector('.pokeMoves');

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            const dataForms = data['forms'];
            const dataForm = dataForms[0];
            pokeNombre.textContent = dataForm['name'];
            mainScreen.classList.add(dataForm['name']);

            const dataTypes = data['types'];
            const dataFirstType = dataTypes[0];
            pokeType.textContent = dataFirstType['type']['name'];
            mainScreen.classList.add(dataFirstType['type']['name']);

            const dataMoves = data['moves'];
            const dataMove = dataMoves[0];
            pokeMoves.textContent = dataMove['move']['name'];
            mainScreen.classList.add(dataMove['move']['name']);

            const dataStatistics = data['stats'];
            const dataStatistic = dataStatistics[0];
            pokeStatistics.textContent = dataStatistic['base_stat'];
            mainScreen.classList.add(dataStatistic['base_stat']);
        } 
    })
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}