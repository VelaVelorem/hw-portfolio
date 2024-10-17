import './App.css';
import Header from './components/Header'
import MainNavbar from './components/MainNavbar';
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="background">
      <MainNavbar />
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
