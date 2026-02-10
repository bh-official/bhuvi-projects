import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App({name, img}) {
  const [count, setCount] = useState(0)
  return(
    <>
    <div>
      <h1>Hello {name} !</h1>
      <img src={img}/>
      </div>
      </>
  );
}

// export default App
