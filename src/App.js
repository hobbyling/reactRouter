import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import FAQ from './components/FAQ'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      {/* 註冊路由表 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
