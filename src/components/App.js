import '../styles/main.scss';
import initialData from '../data/data.json';
import { useState } from 'react';

function App() {
  const [clubs, setClubs] = useState(initialData);
  const [newClubName, setNewClubName] = useState('');
  const [weekDays, setWeekDays] = useState('')
  const [weekends, setWeekends]= useState('')

  const handleNewClubName = (ev) => {
    setNewClubName(ev.target.value);
    console.log(newClubName);
  };

  const handleWeekDays=(ev)=>{
  setWeekDays(ev.target.value)
  }

  const handleWeekends=(ev)=>{
    setWeekends(ev.target.value)
  }

  

  /* const handleClick = (ev) => {
    ev.preventDefault(); */

  /* const newClub = {
      "name": newClubName,
      "openOnWeekdays": openOrnot
      "openOnWeekends": weekends
    }; */

  const renderClubs = () =>
    initialData.map((club, index) => {
      return (
        <li key={index}>
          <h3>{club.name}</h3>

          <p>
            Abierto entre semana:{club.openOnWeekdays === true ? 'Sí' : 'No'}
          </p>

          <p>
            Abierto el fin de semana:Abierto entre semana:
            {club.openOnWeekend === true ? 'Sí' : 'No'}
          </p>
        </li>
      );
    });

  return (
    <>
      <h1> Mis clubs</h1>
      <select name='filter' id='filter'>
        Mostrar
      </select>
      <option value='all'>Todos</option>
      <option value='just-weekdays'>los que abren entre semana</option>
      <option value='just-weekends'>los que abren los fines de semana</option>

      {/* <ul>{renderClubs()}</ul> */}
      <form action=''>
        <label htmlFor='ClubName'> Nombre del club</label>
        <input
          type='text'
          id='ClubName'
          placeholder='Introducir un nuevo club'
          onChange={handleNewClubName}
        />
        <p>Abre entre semana</p>
        <label htmlFor='openOnWeekdays'>
          Sí
         
        </label>
        <input
            id='openOnWeekdays'
            type='radio'
            value='yesweekdays'
            name='weekdays'
            checked={weekDays === 'yesweekdays'}
            onChange={handleWeekDays}
          />
        <label htmlFor='NotOpenOnWeekdays' value='no-weekdays'>
          No
        </label>
        <input
            id='NotOpenOnWeekdays'
            type='radio'
            value='noweekdays'
            name='weekdays'
            checked={weekDays === 'noweekdays'}
            onChange={handleWeekDays}
          />
        <p>Abre los fines de semana</p>

        <label htmlFor='openOnWeekends' value='yes-weekdends'>
          Sí
  
        </label>
        <input
            id='openOnWeekends'
            type='radio'
            value='yesweekends'
            name='weekends'
            checked={weekends === 'yesweekends'}
            onChange={handleWeekends}
          />

        <label htmlFor='NotOpenOnWeekends' value='no-weekdends'>
          No </label>
          <input
            id='NotOpenOnWeekends'
            type='radio'
            value='noweekends'
            name='weekends'
            checked={weekends === 'noweekends'}
            onChange={handleWeekends}
          />
       
        <input
          className='AddNewClub'
          type='submit'
          value='Agregar'
          /* onclick={handleClick} */
          Agregar nuevo club
          />
      </form>
    </>
  );
}

export default App;
