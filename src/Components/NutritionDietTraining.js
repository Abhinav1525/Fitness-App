import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nutrition.css";

function Nutrition() {
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
    <div className="nutrition">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Personalized Nutrition Plans</h1>
          <p>Get the right nutrition tailored to your fitness goals.</p>
        </div>
      </div>

      {/* About Section */}
      <div className="container about-section">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Why Choose Our Nutrition Plans?</h2>
            <p>
              Whether you're looking to lose weight, gain muscle, or maintain a healthy lifestyle, our personalized nutrition plans are designed to fuel your body with the right foods.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/images/nutrition.jpeg" alt="Nutrition Advice" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      {/* Nutrition Plans */}
      <div className="container nutrition-plans">
        <h2 className="text-center">Our Nutrition Plans</h2>
        <div className="row">
          {[
            { title: "Weight Loss Plan", img: "/images/nutrition1.jpeg" },
            { title: "Muscle Gain Plan", img: "/images/nutrition2.jpeg" },
            { title: "Balanced Diet Plan", img: "/images/nutrition.jpeg" },
            { title: "Detox Plan", img: "/images/nutrition3.jpeg" },
          ].map((plan, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card nutrition-card">
                <img src={plan.img} alt={plan.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-center">{plan.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fee Structure */}
      <div className="container text-center mt-4">
        <button className="btn btn-primary" onClick={toggleFees}>
          {showFees ? "Hide Nutrition Fees" : "Show Nutrition Fees"}
        </button>
        {showFees && (
          <div className="fee-section">
            <h2>Nutrition Plan Fees</h2>
            <div className="row justify-content-center">
              {[
                { title: "Single Session", price: "$50" },
                { title: "4 Sessions", price: "$180" },
                { title: "8 Sessions", price: "$320" },
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
        <h3>Ready to get started with a personalized nutrition plan?</h3>
        <button className="btn btn-success" onClick={toggleForm}>
          {showForm ? "Cancel" : "Book a Nutrition Plan"}
        </button>
      </div>

      {/* Booking Form */}
      {showForm && (
        <div className="container booking-form mt-4">
          <h3 className="text-center">Fill in your details to book a nutrition session</h3>
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

export default Nutrition;
