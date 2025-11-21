import React from 'react';
import './testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import AVTR1 from '../../assets/avatar1.jpeg';
import AVTR2 from '../../assets/avatar2.jpeg';
import AVTR3 from '../../assets/avatar3.png';
import AVTR4 from '../../assets/avatar4.jpeg';
import AVTR5 from '../../assets/avatar5.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Syed Atril',
    review: 'Dieum Akonkwa is an excellent software developer who has both good coding skills and soft skills. I have had the pleasure of working with him and can confidently say that he is fantastic at what he does. He has a lot of experience in coding and can explain technical concepts to both technical and non-technical people effectively. Dieum is very passionate about software development and always delivers high-quality work. He pays attention to detail and can think critically and creatively, making him a great addition to any team. Dieum is a great team player who is willing to go above and beyond to ensure the success of his projects. I highly recommend him for any software development role.',
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Danys Linares',
    review: 'I met Dieum in 2022 when we had to show our skills to Microverse which is an online School for Remote Software Developers, we build a small project and made a pair programming session. During this period of time, Dieum proved himself to be a dependable partner and a hard worker with solid problem-solving and technical skills. Although Dieum is a fast learner, he is very careful and cautious about his work. That means he repeatedly runs checks on his programs (and others) before making them public to ensure there aren\'t any hiccups. Overall, Dieum is a talented, hard-working partner and would be an asset to have on any team.',
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Taiwo Enoch',
    review: 'Dieum Akonkwa is one of the most committed and skillful developers I\'ve had the pleasure of working with at Microverse. He\'s super dedicated to his craft, which is exciting and motivating! He\'s always right on schedule, fancies standard/best coding practices, and has impeccable eyes for perfection - not minding a few requests for changes. He\'s positive in demeanor, highly collaborative as a team member, and a good communicator.',
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Sumon Islam',
    review: 'Dieum is a dedicated and skilled professional with expertise in JavaScript, React, Rails, and Bootstrap. He\'s driven by his goals and consistently delivers results. What sets Dieum apart is not only his technical proficiency but also his friendly and collaborative nature. His tenacity when approaching programming challenges is commendable, as he persistently works on them until they are resolved. Dieum\'s combination of technical skills and his amiable personality make him a valuable addition to any organization. I wholeheartedly recommend Dieum for any role or project he chooses to pursue.',
  },
  {
    id: 5,
    avatar: AVTR5,
    name: 'Hiro Mataba',
    review: 'Dieum Akonkwa is one of the most committed and skillful developers I\'ve had the pleasure of working with at Microverse. He\'s super dedicated to his craft, which is exciting and motivating! He\'s always right on schedule, fancies standard/best coding practices, and has impeccable eyes for perfection - not minding a few requests for changes.',
  },
];

const Testimonials = () => (
  <section id="testimonials">
    <h5>Review from partners</h5>
    <h2>Testimonials</h2>
    <Swiper
      className="container testimonials__container"
      modules={[Pagination]}
      loopFillGroupWithBlank
      slidesPerView={1}
      spaceBetween={40}
      slidesPerGroup={1}
      pagination={{ clickable: true }}
    >
      {
          data.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="testimonial">
              <div className="partner__avatar">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <h5 className="partner__name">{ testimonial.name }</h5>
              <small className="partner__review">{ testimonial.review }</small>
            </SwiperSlide>
          ))
        }
    </Swiper>
  </section>
);

export default Testimonials;
