import './App.css'
import useImage from './hooks/useImage'
import { useCatFact } from './hooks/useCatFact'

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useImage({ fact })
  //*  Esta Funcion se encarga de hacer una peticion a la API.
  //*  FirstWords - recibe por parametros las primeras palabras de facts para
  //*  traer una imagen con referencia a las primeras palabras.

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de imagenes</h1>
      <button onClick={handleClick}> Get new Fact </button>
      {fact && <p> {fact} </p>}
      {imageUrl && <img src={imageUrl} alt='cat' />}
    </main>
  )
}
