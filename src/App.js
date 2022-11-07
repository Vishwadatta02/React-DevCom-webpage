import ReactDOM from "react-dom/client";
import HOME from './pages/Home';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Chapters from './pages/Chapters';
import Layout from "./pages/Layout";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";

function App() {
  return (
    <>
    <Layout/>
    <Routes>
      <Route path='/' element={<HOME/>} />
      <Route path='/Chapters' element={<Chapters/>} />
      <Route path='/AboutUs' element={<AboutUs/>} />
      <Route path='/Events' element={<Events/>} />
      <Route path='*' element={<h1>404</h1>} />

    </Routes>
    </>
  
  );
}

export default App;
