export default function Convert(){ /* capitalize react components! */
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const name = 'Gregorio Y. Zara';
  const today = formatDate(new Date())

  const place = {city: 'Spokane', state: 'WA'}
  
  let color = changeColor('red')
  color = setTimeout( () =>{
    changeColor(color)
  },2000)

  return <div>
    <h1>{name}'s Todos for {today} in {place.city}, {place.state}</h1>

    <img className="photo" src={avatar} alt={name} 
   />
   <ul>
    <li style = {{ //double currlies for styling ONLY
      color: color, //can allow for functions to asscoiate to style type..
      fontWeight: 'bolder' /* targets only this list point despite no className. Apply to UL To target all */
    }}>item one</li>
    <li>item two</li>
    <li>item three</li>
   </ul>
  </div>  
}
  /* &quot used for quotes. otherwise error will occur w/ react */

function formatDate(today){ /* data prep before injecting to DOM */
  return new Intl.DateTimeFormat(
    'en-US',
    {weekday: 'long'}
  ).format(today);
}

function changeColor(color){
  const colorList = {red: 'blue', blue: 'green', green: 'red'}
  return colorList[color]
}