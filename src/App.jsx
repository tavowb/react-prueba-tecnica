import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export const App = () => {
  const [fact, setFact] = useState('lorem ipsum cat fact')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>App de gatos</h1>
      {fact && <p> {fact} </p>}
    </main>
  )
}
