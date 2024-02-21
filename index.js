const { values } = require("lodash");

// const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

// fetch(url)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Could not fetch data");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//  using async / await
async function fetchData() {
  try {

    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("could not fetch data");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

  }
  catch (error) {
    console.log(error);
  }
}
