import React from 'react'

const Card = ( { data } ) => {
  const { name, course } = data
  return (
    <div>
      <p>Hola, {name}</p>
      <p>Has elegido el curso de {course}</p>
    </div>
  )
}

export default Card
