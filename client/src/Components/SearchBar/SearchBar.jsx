import style from './SearchBar.module.css'
import { useState } from 'react';
import { useDispatch } from "react-redux"
import { searchCountry } from '../../Redux/actions'

export const SearchBar = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('');

  const srchCntry = (name) => {
    dispatch(searchCountry(name))
  }

  const handleChange = (event) => {
    setName(event.target.value)
  };

  return (
    <div className={style.container}>
      <input type='search' className={style.searchBar} onChange={handleChange} value={name} />
      <button className={style.searchButton} onClick={() => srchCntry(name)}>Agregar</button>
    </div>
  );
}