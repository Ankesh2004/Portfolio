import 'next-google-fonts'
import '@fontsource/fira-code'
import Navbar from './components/Navbar';
import HexagonBackground from './components/HexagonBackground'
import Home from './components/Home';

export default function Main() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <HexagonBackground />
      <Navbar />
      <div className='z-50'>
        <Home />
      </div>

    </div>
  );
}
