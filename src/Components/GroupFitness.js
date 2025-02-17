import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GroupFitness.css";

function GroupFitness() {
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
    <div className="group-fitness">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Group Fitness Classes</h1>
          <p>Get fit together with our dynamic group fitness sessions.</p>
        </div>
      </div>

      {/* About Section */}
      <div className="container about-section">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Why Join Group Fitness?</h2>
            <p>
              Our group fitness classes are a great way to stay motivated, meet new people, and have fun while working towards your fitness goals.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/images/group-fitness-class.jpeg" alt="Group Fitness Class" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      {/* Group Fitness Programs */}
      <div className="container training-types">
        <h2 className="text-center">Our Group Fitness Programs</h2>
        <div className="row">
          {[
            { title: "HIIT (High-Intensity Interval Training)", img: "/images/Group1.jpeg" },
            { title: "Zumba", img: "/images/Group2.jpeg" },
            { title: "Cycling", img: "/images/Group3.jpeg" },
            { title: "Bootcamp", img: "/images/Group4.jpeg" },
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
          {showFees ? "Hide Fitness Fees" : "Show Fitness Fees"}
        </button>
        {showFees && (
          <div className="fee-section">
            <h2>Group Fitness Session Fees</h2>
            <div className="row justify-content-center">
              {[
                { title: "Single Session", price: "$20" },
                { title: "5 Sessions", price: "$90" },
                { title: "10 Sessions", price: "$170" },
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
        <h3>Ready to join a group fitness class?</h3>
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

export default GroupFitness;
