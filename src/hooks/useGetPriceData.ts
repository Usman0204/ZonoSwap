import { useEffect, useState } from 'react'

type ApiResponse = {
  price: number
}

/**
 * Due to Cors the api was forked and a proxy was created

 */
// const api = 'https://api.pancakeswap.com/api/v1/price'
const api= 'https://api.zonoswap.com/price'
const useGetPriceData = () => {
  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api)
        const res = await response.json()

        setData(res)
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}

export default useGetPriceData
