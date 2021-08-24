import React, { useState } from 'react';
import './App.css';

function App() {
  const [tarea, setTarea] = useState([]);
  const [listareas, setListareas] = useState('');



  const onSubmit = (e) => {
    e.preventDefault();
    setTarea([...tarea, listareas]);
  }
  const handleChange = (evento) => {
    setListareas(evento.target.value);
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="row">
        <form onSubmit={onSubmit}>
          <div className="col-md-8 mx-auto" >
            <div className="input-group">
              <input type="text" className="form-control" aria-label="Text input with radio button" value={listareas} onChange={handleChange} placeholder="Actividad a agregar" />
              <button className="btn  btn-primary mx-auto" type="submit" value="submit">Add to list!</button>
            </div>
            <ul>
              {
                tarea.map((li, key) => <li {...{ key }}>{li}</li>)
              }
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
