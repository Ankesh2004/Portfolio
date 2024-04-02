import 'next-google-fonts'
import '@fontsource/fira-code'
import Navbar from '../components/Navbar';
import HexagonBackground from '../components/HexagonBackground'
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function index() {
  return (
    <div className="flex min-h-screen pb-[4rem] flex-col items-center">
      <HexagonBackground />
      <Navbar />
      <div className='z-20 w-screen flex flex-col items-center'>
        <Home />
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
