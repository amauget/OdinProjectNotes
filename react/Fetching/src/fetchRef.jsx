// fetch method defaults to "GET", so it is optional unless the method IS NOT "GET"

fetch(url, {
    method: "GET" // other options: POST, PUT, DELETE, etc.
  })

// POST
fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({})
  })

  /* EXAMPLE */
  import { useEffect, useState } from 'react';

  const FetchGetRequest = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
      const fetchDataForPosts = async () =>{
        try{
          const response = await fetch('url goes here...')

          if(!response.ok){
            throw new Error(`HTTP Error: Status ${response.status}`)
          }
          
          let postData = await response.json()

          setData(postData)
          setError(null)
          
        }catch(err){
          setError(err.message)
          setData(null)
        }finally{
          setLoading(false)
        }

        return <div></div>
      }
      fetchDataForPosts()
    }, []/* <--- argument for useEffect */)
  }

  export default FetchGetRequest