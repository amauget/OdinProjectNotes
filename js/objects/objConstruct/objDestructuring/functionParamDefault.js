/* default values can be placed within functions in the case that a var 
value is not passed through. */
function drawChart({
    size = "big",
    coords = { x: 0, y: 0 },
    radius = 25,
  } = {}) {
    console.log(size, coords, radius);
    // do some chart drawing
  }
  
  drawChart({
    coords: { x: 18, y: 30 },
    radius: 30,
  });

  /* however: if 
  drawChart({x: 18, y: 30}) was entered, radius would default to 25. */