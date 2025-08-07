import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import styles from './css/Review.module.css';

const reviews = [
  {
    name: 'Ayesha Khan',
    rating: 5,
    verified: true,
    message: 'Absolutely loved the product! Delivery was quick and the quality is top-notch.',
  },
  {
    name: 'Ravi Verma',
    rating: 5,
    verified: true,
    message: 'Super smooth shopping experience. Will definitely recommend!',
  },
  {
    name: 'Simran Patel',
    rating: 4,
    verified: true,
    message: 'The selection was amazing and checkout was fast. Great work!',
  },
  {
    name: 'Aman Gupta',
    rating: 5,
    verified: true,
    message: 'Excellent service and beautiful packaging.',
  },
];

const Review = () => {
  return (
    <div className={styles.reviewSection}>
      <div className={styles.header}>
        <h2>Our Happy <span>Coustumers</span></h2>
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={24}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <div className={styles.verified}>✔</div>
              <p className={styles.message}>{review.message}</p>
              <p className={styles.name}>{review.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
