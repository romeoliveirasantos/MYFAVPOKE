
// bulbasaur vars
const bulbasaur = "url(./../../assets/pokemons/bulbasaur.gif)";
const ivysaur = "url(./../../assets/pokemons/ivysaur.gif)";
const venusaur = "url(./../../assets/pokemons/venusaur.gif)"; 
const bulbasaurDesc = "Bulbasaur se assemelha a um pequeno anfíbio/sapo, mas carrega três garras em cada um de seus pés e não tem cauda. Ele também tem olhos grandes e vermelhos e dentes pequenos e afiados. Sua pele é de cor turquesa clara com manchas verdes escuras. Tem três garras nas quatro patas. Sua característica mais notável, é o bulbo em suas costas, que segundo seu registro na Pokédex , foi ali plantado ao nascer."

// charmander vars
const charmander = "url(./../../assets/pokemons/charmander.gif)";
const charmeleon = "url(./../../assets/pokemons/charmeleon.gif)";
const charizard = "url(./../../assets/pokemons/charizard.gif)";

// squirtle vars
const squirtle = "url(./../../assets/pokemons/squirtle.gif)";
const wartortle =  "url(./../../assets/pokemons/wartortle.gif)";
const blastoise = "url(./../../assets/pokemons/blastoise-mega.gif)";

// pichu vars
const pichu = "url(./../../assets/pokemons/pichu.gif)";
const pikachu =  "url(./../../assets/pokemons/pikachu.gif)";
const raichu = "url(./../../assets/pokemons/raichu.gif)";

// gastly vars
const gastly = "url(./../../assets/pokemons/gastly.gif)";
const haunter =  "url(./../../assets/pokemons/haunter.gif)";
const gengar = "url(./../../assets/pokemons/gengar.gif)";

// abra vars
const abra = "url(./../../assets/pokemons/abra.gif)";
const kadabra =  "url(./../../assets/pokemons/kadabra.gif)";
const alakazam = "url(./../../assets/pokemons/alakazam.gif)";

//------------------------------------------------------------------------------------//

// bulbasaur DOM elements
const imageBulbasaur = document.querySelector('.img-container-bulbasaur');
const buttonBulbasaur = document.querySelector('#evolution-bulbasaur');
const bulbasaurName = document.querySelector('.pokemon-name-bulbasaur')
const descButtonBulbasaur = document.querySelector('.desc-button-bulbasaur');

// charmander DOM elements
const imageCharmander = document.querySelector('.img-container-charmander');
const buttonCharmander = document.querySelector('#evolution-charmander');
const charmanderName = document.querySelector('.pokemon-name-charmander');

// squirtle DOM elements
const imageSquirtle = document.querySelector('.img-container-squirtle');
const buttonSquirtle = document.querySelector('#evolution-squirtle');
const squirtleName = document.querySelector('.pokemon-name-squirtle');

// pichu DOM elements
const imagePichu = document.querySelector('.img-container-pichu');
const buttonPichu = document.querySelector('#evolution-pichu');
const pichuName = document.querySelector('.pokemon-name-pichu');

// gastly DOM elements
const imageGastly = document.querySelector('.img-container-gastly');
const buttonGastly = document.querySelector('#evolution-gastly');
const gastlyName = document.querySelector('.pokemon-name-gastly');

// abra DOM elements
const imageAbra = document.querySelector('.img-container-abra');
const buttonAbra = document.querySelector('#evolution-abra');
const abraName = document.querySelector('.pokemon-name-abra');

const divDesc = document.querySelector('.desc-div');
const conteudoDesc = document.querySelector('.desc-conteudo');
const closeButton = document.querySelector('.buttonClose-descDiv')


//------------------------------------------------------------------------------------//

// events
buttonBulbasaur.addEventListener('click', evolutionBulbasaur)
buttonCharmander.addEventListener('click', evolutionCharmander)
buttonSquirtle.addEventListener('click', evolutionSquirtle)
buttonPichu.addEventListener('click', evolutionPichu)
buttonGastly.addEventListener('click', evolutionGastly)
buttonAbra.addEventListener('click', evolutionAbra)
descButtonBulbasaur.addEventListener('click', openDesc)
closeButton.addEventListener('click', closeDesc)

//------------------------------------------------------------------------------------//

//functions

function evolutionBulbasaur(){
  if(bulbasaurName.innerText === "IVYSAUR"){
    imageBulbasaur.style.backgroundImage = venusaur;
    bulbasaurName.innerText = "VENUSAUR"
  }else if(bulbasaurName.innerText === "VENUSAUR"){
    imageBulbasaur.style.backgroundImage = bulbasaur;
    bulbasaurName.innerText = "BULBASAUR"
  }else{
    imageBulbasaur.style.backgroundImage = ivysaur;
    bulbasaurName.innerText = "IVYSAUR"
  }
}

function evolutionCharmander(){
  if(charmanderName.innerText === "CHARMELEON"){
    imageCharmander.style.backgroundImage = charizard;
    charmanderName.innerText = "CHARIZARD"
  }else if(charmanderName.innerText === "CHARIZARD"){
    imageCharmander.style.backgroundImage = charmander;
    charmanderName.innerText = "CHARMANDER"
    
  }else{
    imageCharmander.style.backgroundImage = charmeleon;
    charmanderName.innerText = "CHARMELEON"
    
  }
}

function evolutionSquirtle(){
  if(squirtleName.innerText === "WARTORTLE"){
    imageSquirtle.style.backgroundImage = blastoise;
    squirtleName.innerText = "BLASTOISE"
  }else if(squirtleName.innerText === "BLASTOISE"){
    imageSquirtle.style.backgroundImage = squirtle;
    squirtleName.innerText = "SQUIRTLE"
  }else{
    imageSquirtle.style.backgroundImage = wartortle;
    squirtleName.innerText = "WARTORTLE"
  }
}

function evolutionPichu(){
  if(pichuName.innerText === "PIKACHU"){
    imagePichu.style.backgroundImage = raichu;
    pichuName.innerText = "RAICHU"
  }else if(pichuName.innerText === "RAICHU"){
    imagePichu.style.backgroundImage = pichu;
    pichuName.innerText = "PICHU"
  }else{
    imagePichu.style.backgroundImage = pikachu;
    pichuName.innerText = "PIKACHU"
  }
}

function evolutionGastly(){
  if(gastlyName.innerText === "HAUNTER"){
    imageGastly.style.backgroundImage = gengar;
    gastlyName.innerText = "GENGAR"
  }else if(gastlyName.innerText === "GENGAR"){
    imageGastly.style.backgroundImage = gastly;
    gastlyName.innerText = "GASTLY"
  }else{
    imageGastly.style.backgroundImage = haunter;
    gastlyName.innerText = "HAUNTER"
  }
}

function evolutionAbra(){
  if(abraName.innerText === "KADABRA"){
    imageAbra.style.backgroundImage = alakazam;
    abraName.innerText = "ALAKAZAM"
  }else if(abraName.innerText === "ALAKAZAM"){
    imageAbra.style.backgroundImage = abra;
    abraName.innerText = "ABRA"
  }else{
    imageAbra.style.backgroundImage = kadabra;
    abraName.innerText = "KADABRA"
  }
}

function openDesc(){
  if(divDesc.style.display === "flex"){
    divDesc.style.display = "none"
  }else{
    divDesc.style.display = "flex"
    conteudoDesc.innerText = `${bulbasaurDesc}`
  }
}

function closeDesc(){
  if(divDesc.style.display === "flex"){
    divDesc.style.display = "none"
  }
}
//----------------------------------------------------------------------//



