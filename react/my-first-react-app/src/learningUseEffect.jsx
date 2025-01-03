import { useState, useEffect } from "react";

export default function Clock(){
  const [counter, setCounter] = useState(0)

  useEffect(() =>{
    const key = setInterval(() =>{ // This on its own is compiling every time the page renders, so clock compounds quickly
      setCounter(count => count + 1)
    }, 1000)
    return() => {
      clearInterval(key) // clean up function on unmounting, or rerunning effect. Keeps interval steady.
    }
  }, []) //use effect array dependency. Causes value to only update when there is a state change
  

  return(
    <p>{counter} seconds have passed.</p>
  )
}

function useEffectExamples(){

  useEffect(() => {
    //This runs after every render
  })

  useEffect(() => {
    //This runs only on mount (when the component appears.)
  }, [])


  useEffect(() => {
    //This runs on mount *and also* if either a or b have changed since prev render.
  }, [a,b])

}