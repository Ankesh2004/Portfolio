import 'next-google-fonts'
import '@fontsource/fira-code'
import Navbar from './components/Navbar';
import HexagonBackground from './components/HexagonBackground';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <HexagonBackground />
      <main >

      </main>
    </div>
  );
}
