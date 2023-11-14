import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Play from './pages/Play';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />}>
          </Route>
          <Route path='play' element={<Play />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
