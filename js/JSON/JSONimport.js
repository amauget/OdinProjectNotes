// api's in this case are JSON files
async function populate(){
  const requestURL = 
    'https://mdn.github.io/learning-area/javascript/oojs/json/superheros.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  /* fetch is javascript's built in function for API's 
  allows us to make network requests to retrieve resources.
  */
  const superHeros = await response.json();

populateHeader(superHeros);
populateHeroes(superHeros);
}

function populateHeader(obj){
  const header = document.querySelector('header');
  const myH1 = document.createElement('h1');
  myH1.textContent = obj.squadName /* api data accessed w/ key like standard obj */
  header.appendChild(myH1);

  const myPara = document.querySelector('p');
  myPara.textContent - `Hometown: ${obj.hometown} //Formed: ${obj.formed}`;
  header.appendChild(myPara);
}