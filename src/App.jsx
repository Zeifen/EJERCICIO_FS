import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [editId, setEditId] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch('Ejemplo');
    const data = await res.json();
    setUsers(data);
  }

  //Botón de enviar / actualizar
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, firstName, secondName };
    try {
      if (editId) {
        await fetch (`Ejemplo/${editId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        setEditId(null);
      } else {
        await fetch (`Ejemplo`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        });
        console.log('Us creado');
      }
      setName('');
      setFirstName('');
      setSecondName('');
      fetchUsers();
    } catch (error) {
      console.error('Error', error);
    }
  }

  const handleEdit = (user) => {
    setName(user.name);
    setFirstName(user.firstName);
    setSecondName(user.secondName);
    setEditId(user._id);
  }

  const handleEliminate = async (id) => {
    try {
      await fetch (`Ejemplo/${id}`, {
        method: 'DELETE'
      });
      fetchUsers();
    } catch (error) {
      console.error('Error: ', error);
    }
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
