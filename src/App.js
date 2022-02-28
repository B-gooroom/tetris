import Header from './components/Header.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PingPong from './components/contents/PingPong.js';
import Tetris from './components/contents/Tetris.js';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/ping-pong" element={<PingPong />} />
          <Route path="/tetris" element={<Tetris />} />
          <Route path="*" element={<Navigate replace to="/ping-pong" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
