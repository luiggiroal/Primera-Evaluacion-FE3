import Card from './Card'
import { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [error, setError] = useState('')
  const [show, setShow] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('')

    if (name.length < 3 || name.trimStart() !== name) {
      setError('Ingrese un nombre que tenga al menos 3 caracteres y/o no empiece con un espacio en blanco.')
      return;
    }
    if (course.length < 6) {
      setError('Ingrese un curso que tenga como mínimo 6 caracteres.')
      return;
    }

    setShow({ name, course })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
        </label>
        <label>
          Curso:
          <input type="text" value={course} onChange={(event) => setCourse(event.target.value)} />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {show && <Card data={show} />}
    </div>
  )
}

export default Form
