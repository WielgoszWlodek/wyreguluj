import { useState, useEffect } from 'react'

const url1 = 'https://63adb7f2ceaabafcf16a69bc.mockapi.io/wykres?per_page=100'

export const useFetch1 = () => {
  
  const [data1, setData1] = useState([])

  const getProducts1 = async () => {
    const response1 = await fetch(url1)
    const data1 = await response1.json()
    setData1(data1)
   }

  useEffect(() => {
    getProducts1()
  }, [])
  return {  data1 }
}
