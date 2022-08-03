import './App.css';
import Home from './components/Start/Home.js';
import Name from './components/Name/Name.js'
import Questions from './components/Questions/Questions.js'
import { BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Name" element={<Name />} />
          <Route path="/Questions" element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
