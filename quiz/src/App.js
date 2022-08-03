import './App.css';
import Home from './components/Start/Home.js';
import Name from './components/Name/Name.js'
import { BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Name" element={<Name />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
