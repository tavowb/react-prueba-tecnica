import { useState, useEffect } from 'react'

export function useImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  //* *  efecto usa una funcion que manda la peticion a la API, esta le regresa una imagen
  //* *  la cual tiene que ver con las primeras palabras del fact about cats
  useEffect(() => {
    if (!fact) return
    const image = async () => {
      const word = fact.split(' ', 2).join(' ')
      try {
        const res = await fetch(`https://api.unsplash.com/search/photos/?query=${word}&client_id=VCGSB3pL52YWHdmVFEwuWeaCK4NR-KgSj_duTOIQ4uE`)
        const data = await res.json()
        const url = await data.results[0].urls.regular
        setImageUrl(url)
      } catch (error) {
        console.log(error)
      }
    }
    image()
  }, [fact])

  return { imageUrl }
}

export default useImage
