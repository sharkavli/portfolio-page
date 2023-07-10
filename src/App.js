import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
