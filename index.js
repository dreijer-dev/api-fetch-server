import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Calendar = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  const callBackendAPI = async () => {
    const response = await axios.get('/api')
    return response
  }

  useEffect(() => {
    callBackendAPI().then(
      (res) => {
        setIsLoaded(true)
        setItems(res.data)
      },
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }, [])

  console.log(items)

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <p>Return here</p>
      // <ul>
      //   {items.map((item) => (
      //     <li key={item.name}>{item.name}</li>
      //   ))}
      // </ul>
    )
  }
}

export default ApiFetch
