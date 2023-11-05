import './App.css';
// import logo from './logo.svg';
import Registration from './components/Registration';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/home';
import Login from './components/login';

function App() {
  return (
    <div>
      <HashRouter>
        <Nav />
        <Routes>
          <Route />
          <Route path="/" element={<Home />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path ="/edit-student/:id" element={<EditStudent />} /> */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
