import { useState, useEffect } from 'react'
import paginate from './utils'
const url = 'https://63adb7f2ceaabafcf16a69bc.mockapi.io/wykres?c=100'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(paginate(data))
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return { loading, data }
}
