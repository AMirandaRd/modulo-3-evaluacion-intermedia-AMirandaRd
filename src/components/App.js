import '../styles/main.scss';
import initialData from '../data/data.json';
import { useState } from 'react';

function App() {
  const [clubs, setClubs] = useState(initialData);
  const [newClubName, setNewClubName] = useState('');
  const [weekDays, setWeekDays] = useState(false);
  const [weekends, setWeekends] = useState(false);
  const [filterByOpening, setFilterByOpening] = useState('all')

  const handleFilterByOpening=(ev)=>
  setFilterByOpening(ev.target.value)

  const handleNewClubName = (ev) => {
    setNewClubName(ev.target.value);
    console.log(newClubName);
  };

  const handleWeekDays = (ev) => {
    setWeekDays(ev.target.checked);

  };
  const handleWeekends = (ev) => {
    setWeekends(ev.target.checked);
    
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    clubs.push({
      name: newClubName,
      openOnWeekdays: weekDays,
      openOnWeekend: weekends,
    });
    setClubs([...clubs]);
  };

  const renderClubs = () =>
    clubs
    .filter((club)=>{
      if (filterByOpening ==='weekDays'){
        return club.openOnWeekdays===true
      } else if( filterByOpening==='weekends'){
        return club.openOnWeekend===true
      }else{
        return true
      }

    })
    .map((club, index) => {
      return (
        <li key={index}>
          <h3>{club.name}</h3>

          <p>Abierto entre semana:{club.openOnWeekdays ? 'Sí' : 'No'}</p>
          

          <p>
            Abierto el fin de semana:
            {club.openOnWeekend ? 'Sí' : 'No'}
          </p>
        </li>
      );
    });

  return (
    <>
      <h1> Mis clubs</h1>
      <select name='filter' id='filter' value={filterByOpening} onChange={handleFilterByOpening}>
        Mostrar
        <option value='all'>Todos</option>
        <option value='weekDays'>los que abren entre semana</option>
        <option value='weekends'>los que abren los fines de semana</option>
      </select>
      <ul>{renderClubs()}</ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor='ClubName'> Nombre del club</label>
        <input
          type='text'
          id='ClubName'
          value={newClubName}
          placeholder='Introducir un nuevo club'
          onChange={handleNewClubName}
        />

        <label htmlFor='openOnWeekdays'>¿Abre entre semana?</label>
        <input
          type='checkbox'
          name='openOnWeekdays'
          id='openOnWeekdays'
          checked={weekDays}
          onChange={handleWeekDays}
        />

        <label htmlFor='openOnWeekend'>¿Abre fines de semana?</label>
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
