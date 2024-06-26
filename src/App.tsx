import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState({ title: 'wow' });

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  return (
    <>
      <h1>Yo render</h1>
      {data.title}
      <button>
        click
      </button>
    </>
  )
}

export default App
