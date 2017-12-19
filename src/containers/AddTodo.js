import React from 'react'
import { connect } from 'react-redux'


let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        // *** //

        // Ici trouver un moyen de créer une action a notre store redux
        // pour qu'il ajoute la valeur de notre input à notre store redux
        // tips: regarder dans nos actions
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo