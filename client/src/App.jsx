import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
//Importing all components
import HomePage from './components/homePage/homePage'
import LandingPage from './components/landingPage/landingPage';
/* import Nav from './components/Nav/Nav'
import Detail from './components/Detail/Detail'
import About from './components/About/About'
import Form from './components/Form/Form' */
/* ------------------------------ */

//Importing all functions

const App = () => {

  const {pathname} = useLocation();
  return (
    <>
    {pathname !== '/'}
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      {/* <Route path="/pokemon/:id" element={<Detail />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<Form />} /> */}
    </Routes>
    </>
  )
};

export default App;