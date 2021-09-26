import '../styles/main.scss';
import initialData from '../data/data.json';
import { useState } from 'react';

function App() {
  const [clubs, setClubs] = useState(initialData);
  const [newClubName, setNewClubName] = useState('');
  const [weekDays, setWeekDays] = useState(false);
  const [weekends, setWeekends] = useState(false);

  const handleNewClubName = (ev) => {
    setNewClubName(ev.target.value);
    console.log(newClubName);
  };

  const handleWeekDays = (ev) => {
    setWeekDays(ev.target.checked);
    console.log(weekDays);
  };
  const handleWeekends = (ev) => {
    setWeekends(ev.target.checked);
    console.log(weekends);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    clubs.push({
      name: newClubName,
      weekDays: weekDays,
      weekends: weekends,
    });
    setClubs([...clubs]);
  };

  const renderClubs = () =>
    clubs.map((club, index) => {
      return (
        <li key={index}>
          <h3>{club.name}</h3>

          <p>Abierto entre semana:{club.openOnWeekdays ? 'Sí' : 'No'}</p>

          <p>
            Abierto el fin de semana:Abierto entre semana:
            {club.openOnWeekend ? 'Sí' : 'No'}
          </p>
        </li>
      );
    });

  return (
    <>
      <h1> Mis clubs</h1>
      <select name='filter' id='filter'>
        Mostrar
        <option value='all'>Todos</option>
        <option value='just-weekdays'>los que abren entre semana</option>
        <option value='just-weekends'>los que abren los fines de semana</option>
      </select>
      {<ul>{renderClubs()}</ul>}
      <form onSubmit={handleSubmit}>
        <label htmlFor='ClubName'> Nombre del club</label>
        <input
          type='text'
          id='ClubName'
          value={newClubName}
          placeholder='Introducir un nuevo club'
          onChange={handleNewClubName}
        />

        <label htmlFor=''>¿Abre entre semana?</label>
        <input
          type='checkbox'
          name='openOnWeekdays'
          id='openOnWeekdays'
          checked={weekDays}
          onChange={handleWeekDays}
        />

        <label htmlFor=''>¿Abre fines de semana?</label>
        <input
          type='checkbox'
          name='openOnWeekend'
          id='openOnWeekend'
          checked={weekends}
          onChange={handleWeekends}
        />

        <input type='submit' name='btn' id='btn' value='añadir un nuevo club' />
      </form>
    </>
  );
}

export default App;
