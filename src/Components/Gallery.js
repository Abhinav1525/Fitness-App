// src/components/Gallery.js
import React from 'react';
import './Gallery.css';
import { useLocation} from 'react-router-dom';

function Gallery() {
  const galleryImages = [
    './images/gym4.jpg',
    '/images/gym2.jpg',
    '/images/gym3.jpg',
    '/images/gym5.jpg'
  ];
  const homeImages = [
    '/images/gym3.jpg',
    '/images/gym5.jpg',
    '/images/gym6.jpeg',
    '/images/gym7.jpeg'
  ];
 const navigate = useLocation();
 let images = homeImages;
  if(navigate.pathname==="/gallery"){
   images = galleryImages;
  }
  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gym ${index + 1}`} />
          </div>
        ))}
      </div>
    
    </section>
  );
}

export default Gallery;