import _ from 'lodash';


function component(){
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

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