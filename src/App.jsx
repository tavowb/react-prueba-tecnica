import { useState, useEffect } from 'react'
import './App.css'
import { getRandomFact } from './hooks/facts'
import { getImage } from './hooks/image'

export const App = () => {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  //*  Esta Funcion se encarga de hacer una peticion a la API.
  //*  FirstWords - recibe por parametros las primeras palabras de facts para
  //*  traer una imagen con referencia a las primeras palabras.
  const Image = async () => {
    const newImageUrl = await getImage(fact)
    setImageUrl(newImageUrl)
  }

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  //* * 1 efecto que hace la primera peticion a la API usando una funcion, esta me regresa el fact acerca de los gatos.
  useEffect(() => {
    handleClick()
  }, [])

  //* * 2do efecto usa una funcion que manda la peticion a la API, esta le regresa una imagen
  //* *  la cual tiene que ver con las primeras palabras del fact about cats
  useEffect(() => {
    if (!fact) return
    Image()
  }, [fact])

  return (
    <main>
      <h1>App de imagenes</h1>
      <button onClick={handleClick}> Get new Fact </button>
      {fact && <p> {fact} </p>}
      {imageUrl && <img src={imageUrl} alt='cat' />}
    </main>
  )
}
