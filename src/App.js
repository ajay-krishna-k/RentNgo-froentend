import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Carluxurious from './pages/Carluxurious';
import Carseven from './pages/Carseven';
import Carfive from './pages/Carfive';
import Footer from './components/Footer';
import Booking from './pages/Booking';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}></Route> 
      <Route path='/compact' element={<Carfive/>}/>
        <Route path='/suv' element={<Carseven/>}/>
        <Route path='/luxurious' element={<Carluxurious/>}/>
        <Route path='/booking' element={<Booking/>}/>

      </Routes>
<Footer/>
    </div>
  );
}

export default App;
