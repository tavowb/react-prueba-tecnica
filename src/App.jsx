import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export const App = () => {
  const [fact, setFact] = useState()
  const [Word, setWord] = useState()
  const [imageUrl, setImageUrl] = useState()
  console.log('renderizo')

  const peticion = async (FirstWords) => {
    console.log('peticion de img')
    console.log(fact)
    console.log(Word)
    console.log(imageUrl)
    const res = await fetch(`https://api.unsplash.com/search/photos/?query=${FirstWords}&client_id=VCGSB3pL52YWHdmVFEwuWeaCK4NR-KgSj_duTOIQ4uE`)
    const dataf = await res.json()
    setImageUrl(dataf.results[0].urls.regular)
  }
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(data.fact)
        setWord(fact.split(' ', 2).join(' '))
      })
  }, [])

  useEffect(() => {
    peticion(Word)
  }, [Word])

  return (
    <main>
      <h1>App de imagenes</h1>
      {fact && <p> {fact} </p>}
      {imageUrl && <img src={imageUrl} alt='cat' />}
    </main>
  )
}
