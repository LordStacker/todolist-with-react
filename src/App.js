import React, { useState } from 'react';
import './App.css';

function App() {
  const [tarea, setTarea] = useState([]);
  const [listareas, setListareas] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    setTarea({
      tarea: [...tarea, listareas],
      listareas: ''
    })
  }
  const handleChange = ({ target: { value } }) => setListareas({
    listareas: value
  })
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="row">
        <form onSubmit={onSubmit}>
          <div className="col-md-8 mx-auto" >
            <div className="input-group">
              <input type="text" className="form-control" aria-label="Text input with radio button" onChange={handleChange} placeholder="Actividad a agregar" />
              <button className="btn  btn-primary mx-auto" type="submit">Add to list!</button>
              {
                tarea.map((li, key) => <li {...{ key }}>{li}</li>)
              }
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
