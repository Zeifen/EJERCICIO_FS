import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [editId, setEditId] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Prueba");
  }

  const handleEdit = (user) => {
    setName(user.name);
    setFirstName(user.firstName);
    setSecondName(user.secondName);
    setEditId(user._id);
  }

  const handleEliminate = () => {
    
  }

  return (
    <>
      <div className='container'>
        <h2 className='mb-2'>Ejercicio</h2>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Nombre' className='form-control mb-2' value={name} onChange={(e) => setName(e.target.value)} required></input>
            <input type='text' placeholder='Apellido Paterno' className='form-control mb-2' value={firstName} onChange={(e) => setFirstName(e.target.value)} required></input>
            <input type='text' placeholder='Apellido Materno' className='form-control mb-2' value={secondName} onChange={(e) => setSecondName(e.target.value)} required></input>
            <button className='btn btn-info'>
              {editId? 'Actualizar' : 'Enviar'}
            </button>
          </form>
      </div>

      <div className='container'>
        <h3 className='mt-5 mb-5'>Usuarios registrados</h3>
        {users.length === 0 ? <p>No hay us. registrado</p> : 
          <ul>
            {users.map(user => (
              <li className='list-group-item' key={user._id}>
                <span>{user.name} {user.firstName} {user.secondName}</span>
                <span>
                  <button className='btn btn-warning me-2' onClick={() => handleEdit(user)}>Editar</button>
                  <button className='btn btn-danger' onClick={() => handleEliminate(user._id)}>Eliminar</button>
                </span>
              </li>
            ))}
          </ul>
        }
      </div>
    </>
  )
}

export default App;
