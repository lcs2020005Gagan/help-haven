import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Receiver from './components/Receiver';
import NoteState from './context/notes/NoteState';



function App() {
  return (
    <NoteState>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Main/>} />
      <Route path='/receiver' element={<Receiver/>} />
    </Routes>
    </BrowserRouter>
    </NoteState>
    
  );
}

export default App;
