import { Routes, Route } from "react-router-dom";
import Start from './pages/start'
import Prompt from './pages/prompt';
import Role from './pages/role';
import Celebrity from "./pages/celebrity";
import CelebrityDaily from "./pages/celebrityDaily";

import Error from './pages/error';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <audio autoplay="autoplay" loop="">
        <source src="/bg.mp3"></source>
      </audio> */}
      <div>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/role" element={<Role />} />
          <Route path="/prompt" element={<Prompt />} />
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/celebrity-daily" element={<CelebrityDaily />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
