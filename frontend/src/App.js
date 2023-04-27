
import './App.scss';
import { About, Header, Footer, Skills, Testimonials, Works, Certificates } from './container'
import { Navbar } from './components';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Certificates />
      <Testimonials />
      <Footer />

    </div>
  );
}

export default App;
