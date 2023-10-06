import './App.css';
import Home from './components/Home';
import Footer from './components/footer';
import Header from './components/Header';
import About from './components/about';
import Boujmil from './components/boujmil';
import Activities from './components/activities';
import Reserve from './components/reserv';
import Contact from './components/contact';
import Mj from './components/mj';
import { Routes,Route } from 'react-router-dom';
function App() {
  // animation
  
  window.addEventListener('scroll',() => {
    const elements = document.querySelectorAll('.up, .opacity,.left');
    const windowHeight = window.innerHeight;
  
    const checkPosition = () => {
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        let delay = 0;
        if (element.classList.contains('delay-1')) {
          delay = 400;
        } else if (element.classList.contains('delay-2')) {
          delay = 500;
        } else if (element.classList.contains('delay-3')) {
          delay = 600;
        } else if (element.classList.contains('delay')) {
          delay = 300;
        }
  
        if (elementTop - windowHeight <= 0) {
          element.style.transitionDelay = `${delay}ms`;
          if (element.classList.contains('up')) {
            element.classList.add('opacity-100', 'translate-y-0');
            element.classList.remove('opacity-0', 'translate-y-10');
          }
          if (element.classList.contains('opacity')) {
            element.classList.add('opacity-100');
            element.classList.remove('opacity-0');
          }
          if (element.classList.contains('left')) {
            element.classList.add('opacity-100', '-translate-x-0');
            element.classList.remove('opacity-0', '-translate-x-10');
          }
        }
      });
    };
  
  } 
  )
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} exact></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='boujmil' element={<Boujmil/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='activities' element={<Activities/>}></Route>
        <Route path='mj' element={<Mj/>}></Route>
        <Route path='reserv' element={<Reserve/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
