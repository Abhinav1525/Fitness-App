import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import GroupFitness from './Components/GroupFitness';
import PersonalTraining from './Components/PersonalTraining';
import Yoga from './Components/Yoga';
import NutritionDietTraining from './Components/NutritionDietTraining';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/gallery' element={<Gallery></Gallery>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path="/services/PersonalTraining" element={<PersonalTraining />} />
          <Route path="/services/GroupFitness" element={<GroupFitness />} />
          <Route path="/services/Yoga" element={<Yoga />} />
          <Route path="/services/NutritionDietTraining" element={<NutritionDietTraining />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
