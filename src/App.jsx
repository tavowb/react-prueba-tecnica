import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export const App = () => {
  const [fact, setFact] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(data.fact)
        const firstWord = fact.split(' ')[0]
        console.log(firstWord)
      })
  }, [])

  return (
    <main>
      <h1>App de gatos</h1>
      {fact && <p> {fact} </p>}
    </main>
  )
}
