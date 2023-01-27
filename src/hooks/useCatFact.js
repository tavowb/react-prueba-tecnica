import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }
  //* * 1 efecto que hace la primera peticion a la API usando una funcion, esta me regresa el fact acerca de los gatos.
  useEffect(() => {
    refreshFact()
  }, [])

  return { fact, refreshFact }
}
