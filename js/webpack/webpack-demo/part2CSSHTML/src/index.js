import _ from 'lodash';
import './style.css';
import Icon from './exteriorContent/dog.jpg';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component(){
  const element = document.createElement('div');

  /* join funct won't work without importing lodash
    npm install --save lodash command to install it to the src dir.
  */
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  /* add img to existing div: */
  const myIcon = new Image();
  myIcon.classList.add('background');
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data); /* imports arrays of data */
  console.log(Notes); /* imports as an object*/

  return element;
}

document.body.appendChild(component());


/* package.json notes are here since it doesn't allow comments:
  
  change "main": "index.js" => "private": true 
      this disallows accidental publishes to main branch.

  add underst "scripts":
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"

    This allows scripts to reference locally installed npm packages by name
  
*/