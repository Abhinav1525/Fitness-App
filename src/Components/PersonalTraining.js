import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PersonalTraining.css";

function PersonalTraining() {
  const [showFees, setShowFees] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const toggleFees = () => {
    setShowFees(!showFees);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const bookSession = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill out all fields before booking.");
      return;
    }

    alert(`Session booked successfully!\n\nDetails:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`);
    setFormData({ name: "", email: "", phone: "" }); // Reset form
    setShowForm(false); // Hide form after booking
  };

  return (
    <div className="personal-training">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Personal Training</h1>
          <p>Achieve your fitness goals with our expert trainers.</p>
        </div>
      </div>

      {/* About Section */}
      <div className="container about-section">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Why Choose Personal Training?</h2>
            <p>
              Our personal training services provide customized workout plans, professional guidance, 
              and motivation to help you reach your fitness goals efficiently.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/images/trainer-client.jpeg" alt="Trainer with Client" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      {/* Training Types */}
      <div className="container training-types">
        <h2 className="text-center">Our Training Programs</h2>
        <div className="row">
          {[
            { title: "Strength Training", img: "/images/PT1.jpeg" },
            { title: "Cardio Training", img: "/images/PT2.jpeg" },
            { title: "Flexibility & Mobility", img: "/images/PT3.jpeg" },
            { title: "Weight Loss Programs", img: "/images/PT4.jpeg" },
          ].map((training, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card training-card">
                <img src={training.img} alt={training.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-center">{training.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fee Structure */}
      <div className="container text-center mt-4">
        <button className="btn btn-primary" onClick={toggleFees}>
          {showFees ? "Hide Personal Training Fees" : "Show Personal Training Fees"}
        </button>
        {showFees && (
          <div className="fee-section">
            <h2>Personal Training Fees</h2>
            <div className="row justify-content-center">
              {[
                { title: "Single Session", price: "$60" },
                { title: "5 Sessions", price: "$275" },
                { title: "10 Sessions", price: "$500" },
              ].map((fee, index) => (
                <div key={index} className="col-md-4">
                  <div className="card fee-card">
                    <div className="card-body">
                      <h5 className="card-title">{fee.title}</h5>
                      <p className="card-text">{fee.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="cta text-center mt-5">
        <h3>Ready to start your fitness journey?</h3>
        <button className="btn btn-success" onClick={toggleForm}>
          {showForm ? "Cancel" : "Book a Session"}
        </button>
      </div>

      {/* Booking Form */}
      {showForm && (
        <div className="container booking-form mt-4">
          <h3 className="text-center">Fill in your details to book a session</h3>
          <form className="form-group">
            <div className="mb-3">
              <label>Name</label>
              <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label>Phone Number</label>
              <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
            </div>
            <button type="button" className="btn btn-primary w-100" onClick={bookSession}>
              Book Session
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PersonalTraining;
