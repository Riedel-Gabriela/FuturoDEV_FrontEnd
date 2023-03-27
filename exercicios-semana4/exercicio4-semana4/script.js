const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');
const pokemonHp = document.querySelector('#hp');
const pokemonAttack = document.querySelector('#attack');
const pokemonDefense = document.querySelector('#defense');
const pokemonSAttack = document.querySelector('#special-attack');
const pokemonSDefense = document.querySelector('#special-defense');
const pokemonSpeed = document.querySelector('#speed');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';
  
    const data = await fetchPokemon(pokemon);
  
    if (data) {
      pokemonImage.style.display = 'block';
      pokemonName.innerHTML = data.name;
      pokemonNumber.innerHTML = data.id;
      pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
      pokemonHp.innerHTML = data['stats'][0]['base_stat']
      pokemonAttack.innerHTML = data['stats'][1]['base_stat']
      pokemonDefense.innerHTML = data['stats'][2]['base_stat']
      pokemonSAttack.innerHTML = data['stats'][3]['base_stat']
      pokemonSDefense.innerHTML = data['stats'][4]['base_stat']
      pokemonSpeed.innerHTML = data['stats'][5]['base_stat']
      input.value = '';
      searchPokemon = data.id;
    } else {
      pokemonImage.style.display = 'none';
      pokemonName.innerHTML = 'Not found';
      pokemonNumber.innerHTML = '';
    }
  }

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
  });
  
  buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {
      searchPokemon -= 1;
      renderPokemon(searchPokemon);
    }
  });
  
  buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
  });
  
  renderPokemon(searchPokemon);