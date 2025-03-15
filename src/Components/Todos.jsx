import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Items from './Items'

const Todos = (props) => {
  return (
    <div>
      <Header/>
      <h1>todos list</h1>
      <h4>
        {props.todos.map(todo => todo.title).join(', ')}
      </h4>
      <Footer />
    </div>
  )
}

export default Todos
