// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Todos from './Components/Todos.jsx'
import Items from './Components/Items.jsx'
// import './App.css'

function App() {
  let todosList = [
    {
      title: "Buy milk1",
    },
    {
      title: "Buy water2",
    },
    {
      title: "Buy drink3",
    }
  ]
  return (
    <>
     <Header title="Todo App" searchBar ={false} />
     <Todos todos={todosList} />
     <Footer/>

    </>
  )
}

export default App
