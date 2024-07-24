import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AboutMe from './Pages/Aboutme/AboutMe';
import ContactMe from './Pages/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/contact-me' element={<ContactMe />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
