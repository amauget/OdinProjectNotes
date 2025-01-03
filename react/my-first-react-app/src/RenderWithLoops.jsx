export default function RenderLoops(){
  // const animals = ['lion', 'tiger', 'bear', 'snake', 'shark']
  // const animalsList = animals.map((animal) => {
  //   return <li key={animal}>{animal}</li>
  // })
  // return <div>
  //   <h1>Animals</h1>
  //   <ul>
  //     {animalsList}
  //     {/*Same as animalsList
  //      {animals.map((animal) => {
  //       return <li key={animal}>{animal}</li>
  //     })} */}
  //   </ul>
  // </div>
  return SophisticatedRender() //Testing other method 
}
/* OR */
function SophisticatedRender(){
  const animals = ['lion', 'tiger', 'bear', 'snake', 'shark']

  return(
    <ul>
      <h1>Animals</h1>
      <SpecificList animals={animals} /> {
      /* calls the function & treats as nodelist (only lion & tiger based on conditions) */}
    </ul>
  )
}

function SpecificList(props){ /* can be used to filter DOM items from parameters */

  return props.animals.map((animal) =>{  
    return animal.startsWith('l') || animal.startsWith('t') ? <li key={animal}>{animal}</li> : null
  })
}