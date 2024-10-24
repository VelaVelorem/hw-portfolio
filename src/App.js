import './App.css';
import Header from './components/Header';
import MainNavbar from './components/MainNavbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ProjectPage from './pages/ProjectPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Header />

      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ProjectPage" element={<ProjectPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
