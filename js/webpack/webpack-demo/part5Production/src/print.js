export default function printMe() {
  console.log('I get called from print.js!'); 
  /* deliberate syntax error to show  source maps in dev tools. */
}

// JSON NOTES:
/* npm install --save-dev webpack-dev-server
    add this line to JSON:
      "watch": "webpack --watch",
      "start":"webpack serve --open",
    then run npm start on cmd line

  functions similar to vscode live server
*/ 