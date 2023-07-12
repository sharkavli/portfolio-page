import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import Projects from './components/Projects/Projects.js';
import Games from './components/Games/Games.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="portfolio-page/" element={<Main />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
