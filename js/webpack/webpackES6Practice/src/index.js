import myName from './myName';

function component(){
  const element = document.createElement('div');

  element.textContent = myName('Aaron');
  
  return element;
}

document.body.appendChild(component());

