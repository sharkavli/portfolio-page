import Header from './Header.js';
import About from './About.js';
import MainSection from './MainSection.js';
import Footer from './Footer.js';

export default function Main() {
  return (
    <div className="main">
      <Header />
      <About />
      <MainSection />
      <Footer />
    </div>
  );
}
