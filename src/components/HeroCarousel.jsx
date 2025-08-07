import React, { useState } from "react";
import styles from "./css/HeroCarousel.module.css";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
const slides = [
  {
    id: 1,
    title: "Where Fashion Begins",
    subtitle: "Shop the latest drops, trendsetters, and everyday icons.",
    discount: "UP to 80% OFF",
    image:
      pic5,
  },
  {
    id: 2,
    title: "Where Fashion Begins",
    subtitle: "Shop the latest drops, trendsetters, and everyday icons.",
    discount: "UP to 80% OFF",
    image:
      pic4,
  },
  {
    id: 3,
    title: "Where Fashion Begins",
    subtitle: "Shop the latest drops, trendsetters, and everyday icons.",
    discount: "UP to 80% OFF",
    image:
      pic3,
  },
  {
    id: 4,
    title: "Where Fashion Begins",
    subtitle: "Shop the latest drops, trendsetters, and everyday icons.",
    discount: "UP to 80% OFF",
    image:
      pic2,
  },
  {
    id: 4,
    title: "Where Fashion Begins",
    subtitle: "Shop the latest drops, trendsetters, and everyday icons.",
    discount: "UP to 80% OFF",
    image:
      pic1,
  },
  {
    id: 2,
    title: "Fresh Fits Only",
    subtitle: "Stay ahead with our newest arrivals.",
    discount: "UP to 70% OFF",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.slide}
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className={styles.overlay}>
          <div className={styles.textContent}>
            <h1>{slides[current].title}</h1>
            <p className={styles.subtitle}>{slides[current].subtitle}</p>
            <span className={styles.discount}>{slides[current].discount}</span>
          </div>
          <div className={styles.controls}>
            <button onClick={prevSlide}>&lt;</button>
            <div className={styles.dots}>
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={i === current ? styles.dotActive : styles.dot}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
            <button onClick={nextSlide}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
