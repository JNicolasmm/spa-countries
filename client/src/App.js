import style from './App.module.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './Views/Home/Home';
import { Landing } from './Views/Landing/Landing';
import { NavBar } from './Components/NavBar/NavBar'
import { CountryDetail } from './Views/CountryDetail/CountryDetail'
import { Activities } from './Views/Activities/Activities'

function App() {
  const { pathname } = useLocation()

  return (
    <div className={style.body}>
      {pathname !== '/' && <NavBar />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/activities' element={<Activities />} />
        <Route path="/detail/:id" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
