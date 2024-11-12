import './App.css';
import Header from './components/Header';
import MainNavbar from './components/MainNavbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ProjectPage from './pages/ProjectPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Header />

      <Routes>
        <Route path="/hw-portfolio" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ProjectPage" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/hw-portfolio" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
