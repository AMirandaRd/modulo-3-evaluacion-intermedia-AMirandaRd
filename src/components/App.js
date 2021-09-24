import '../styles/main.scss';
import initialData from '../data/data.json';
import { useState } from 'react';

function App() {
  console.log(initialData);

  const [clubs, setClubss] = useState('initialData');

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
    //const handleChanges=>
    //const handleClick


  return (
    <>
      <h1> Mis clubs</h1>
      <ul>{renderClubs()}</ul>
      <form action=''>
        <label htmlFor='ClubName'> Nombre del club</label>
        <input
          type='text'
          id='ClubName'
          placeholder='Introducir un nuevo club'
        />
        <p>Abre entre semana</p>
        <label htmlFor='openOnWeekdays'>Sí
        <input id='openOnWeekdays' type='radio' value='yes-weekdays' onChange={handleChanges}/>
        </label>
        <label htmlFor='NotOpenOnWeekdays' value='no-weekdays'>
          No
        <input id='NotOpenOnWeekdays' type='radio' onChange={handleChanges} />
        </label>
        <p>Abre los fines de semana</p>

        <label htmlFor='openOnWeekends' value='yes-weekdends'>
          Sí
        <input id='openOnWeekends' type='radio'  onChange={handleChanges}></input>
         </label>
        <label htmlFor='NotOpenOnWeekends' value='no-weekdends'>
          No
        <input id='NotOpenOnWeekends' type='radio' onChange={handleChanges}></input>
        </label>
        <input
            className="AddNewClub"
            type="submit"
            value="Add"
            onClick={handleClick}></input>
      </form>

    </>
  );
}

export default App;
