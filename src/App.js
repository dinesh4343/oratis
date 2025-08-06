
import './App.css';
import Header from './components/JS/Header';
import Footer from './components/JS/Footer';
import './components/CSS/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextToAudio from './components/JS/TextToAudio';
import  TopDown from './components/JS/TopDown';
import Hero from './components/JS/Hero';


function App() {
  return (
    <div className="App">

    <div className='Header'>
      <Header />
    </div>

    <div className='Hero'>
      <Hero />
    </div>

    <div className='TextToAudio'>
      <TextToAudio />
    </div>


    <div className='Footer'>
      <Footer />
    </div>

    <div className='TopDown'>
      <TopDown /> 
    </div>

    </div>
  );
}

export default App;
