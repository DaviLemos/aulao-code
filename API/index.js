// url = 'https://pokeapi.co/api/v2/pokemon/charmander';
url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

function getWithFetch() {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}

function getwithXML() {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      }
    };
    xhr.send();
  });
}

function getWithAjax() {
  return $.ajax({
    url: url,
    type: 'GET',
  });
}

function onLoadFunc(cond) {
  switch (cond) {
    case 'f':
      getWithFetch().then((data) => {
        console.log(data);
        showInfoOnPage(data);
      });
      break;

    case 'x':
      getwithXML()
        .then((data) => {
          console.log(JSON.parse(data));
          showInfoOnPage(data);
        })
        .catch((error) => {});
      break;

    case 'a':
      getWithAjax().then((data) => {
        console.log(data);
        showInfoOnPage(data);
      });
      break;

    default:
      break;
  }
}

const pokemonList = (data) => {
  return `
    <ul>
      ${data.results.map((pokemon) => `<li>${pokemon.name}</li>`).join('')}
    </ul>
  `;
};

function showInfoOnPage(data) {
  const root = document.getElementById('root');
  const list = pokemonList(data);

  root.innerHTML = list;
}
