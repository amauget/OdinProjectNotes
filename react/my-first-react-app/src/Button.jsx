function MkBtn({ color, fontSize, text, handleClick }){
  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'rem'

  }

  return(
    <button onClick={ () => handleClick('https://www.theodinproject.com')} style={buttonStyle}>{text}</button>
  )
}
// MkBtn.defaultProps = { /* alerted that this will be losing support!! */
//   text: "Default Here!",
//   color: "blue",
//   fontSize: 1.2
// };

export default function Button(){
  const handleButtonClick = (url) => {
    window.location.href = url;
  };
  return (
    <div>
      <MkBtn text='Click Me!' color='blue' fontSize='1.2' handleClick={handleButtonClick}/>
      <MkBtn text='Do Not Click Me!' color='red' fontSize='1.2'/>
      <MkBtn text='Click Me!' color='blue' fontSize='2'/>
    </div>
  )
}