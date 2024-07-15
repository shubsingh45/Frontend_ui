import img3 from '../assests/img3.jpg'
import img1 from '../assests/img1.jpg'
import img2 from '../assests/img2.jpg'

// src/Text.js
import React, { useState } from 'react';
import { Button } from 'flowbite-react';

function Text() {
  const images = [
    img1,
   img2,
    img3,
    img1,
    img2,
     img3,
     img1,
     img2,
      img3,
      img1,
      img2,
       img3,
      
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 4
    );
  };

  return (
    <div className="App">
    <header className="App-header">
      <h1 className="text-3xl font-bold mb-4">Flowbite React Carousel</h1>
      <div className="relative w-full max-w-lg mx-auto">
        <div className="flex space-x-4 overflow-hidden">
          {images.slice(currentIndex, currentIndex + 4).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${currentIndex + index + 1}`}
              className="block w-1/4"
            />
          ))}
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <Button onClick={handlePrev}>Previous</Button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <Button onClick={handleNext}>Next</Button>
        </div>
      </div>
    </header>
  </div>
  );
}

export default Text;
