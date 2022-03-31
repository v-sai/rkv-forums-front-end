import './App.css';

import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'

import Nav from './components/nav/Nav'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register';

function App() {

  let Home = ()=>{
    return "home"
  }

  return (
    <Router>

      <div className="app">
        <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
      </div>
    </Router>
  );
}


export default App;
