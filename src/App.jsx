import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Main from './components/Main'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
