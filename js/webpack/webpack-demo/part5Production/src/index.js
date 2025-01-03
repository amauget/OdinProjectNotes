import _ from 'lodash';
import printMe from './print.js';

function component(){
  const element = document.createElement('div');
  const btn = document.createElement('button');
  /* join funct won't work without importing lodash
    npm install --save lodash command to install it to the src dir.
  */
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);


  return element;
}

document.body.appendChild(component());

