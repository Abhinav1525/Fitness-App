import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

function Services() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-item" onClick={() => handleNavigation('/services/PersonalTraining')}>
          <img src="/images/personal-training.jpg" alt="Personal Training" />
          <h3>Personal Training</h3>
        </div>
        <div className="service-item" onClick={() => handleNavigation('/services/GroupFitness')}>
          <img src="/images/group-fitness.jpg" alt="Group Fitness Classes" />
          <h3>Group Fitness Classes</h3>
        </div>
        <div className="service-item" onClick={() => handleNavigation('/services/Yoga')}>
          <img src="/images/yoga.jpg" alt="Yoga and Meditation" />
          <h3>Yoga and Meditation</h3>
        </div>
        <div className="service-item" onClick={() => handleNavigation('/services/NutritionDietTraining')}>
          <img src="/images/nutrition.jpg" alt="Nutrition Guidance" />
          <h3>Nutrition Guidance</h3>
        </div>
      </div>
    </section>
  );
}

export default Services;