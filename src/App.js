import './App.css';

import Nav from './components/nav/Nav'
import Login from './components/auth/login/Login'

import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'

function App() {
const Home = ()=>{
  return <div>
    <h1>Home</h1>
  </div>
}

  return (
    <Router>

      <div className="app">
        <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
      </div>
    </Router>
  );
}


export default App;
