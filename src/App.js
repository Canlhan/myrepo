
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';


function App() {
  return (
    <>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </>
  );
}

export default App;
