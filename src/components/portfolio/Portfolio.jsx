import React from 'react';
import './portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import IMG1 from '../../assets/project1.png';
import IMG2 from '../../assets/project2.png';
import IMG3 from '../../assets/project3.png';
import IMG4 from '../../assets/project4.png';
import IMG5 from '../../assets/project5.png';
import IMG6 from '../../assets/project6.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Pollstar',
    detail: 'The purpose of this website is to keep you updated on upcoming concerts in America.',
    github: 'https://github.com/dieum512/HTML-basic-JavaScript-Capstone',
    demo: 'https://dieum512.github.io/HTML-basic-JavaScript-Capstone/',
    stack: [
      {
        id: 1,
        tech: 'HTML',
      },
      {
        id: 2,
        tech: 'CSS',
      },
      {
        id: 3,
        tech: 'JavaScript',
      },
    ],
  },
  {
    id: 2,
    image: IMG2,
    title: 'Todo List',
    detail: 'The purpose of this website is to help you organize your day by writing in there the tasks to do but also to check the tasks that are already done',
    github: 'https://github.com/dieum512/To-do-list-test',
    demo: 'https://dieum512.github.io/To-do-list-test/dist/',
    stack: [
      {
        id: 1,
        tech: 'HTML',
      },
      {
        id: 2,
        tech: 'CSS',
      },
      {
        id: 3,
        tech: 'JavaScript',
      },
    ],
  },
  {
    id: 3,
    image: IMG3,
    title: 'Leaderboard',
    detail: 'The Leaderboard displays scores submited by different players. You can also submit your score there too and it will be saved in an external API',
    github: 'https://github.com/dieum512/Leaderboard',
    demo: 'https://dieum512.github.io/Leaderboard/dist/',
    stack: [
      {
        id: 1,
        tech: 'HTML',
      },
      {
        id: 2,
        tech: 'CSS',
      },
      {
        id: 3,
        tech: 'JavaScript',
      },
    ],
  },
  {
    id: 4,
    image: IMG4,
    title: 'Calculator',
    detail: 'This is just a simple calculator that helps you do some math operations but also loads some life\'s quotes on every refresh of the page',
    github: 'https://github.com/dieum512/math-magicians',
    demo: 'https://math-magicians-3myx.onrender.com/',
    stack: [
      {
        id: 1,
        tech: 'React',
      },
      {
        id: 2,
        tech: 'CSS',
      },
    ],
  },
  {
    id: 5,
    image: IMG5,
    title: 'Countries App',
    detail: 'This contains the list of all the countries in the world and helps you find some different informations for each and every one of them like the area, capital, population, etc.',
    github: 'https://github.com/dieum512/countries-app',
    demo: 'https://coutries-app.onrender.com/',
    stack: [
      {
        id: 1,
        tech: 'React',
      },
      {
        id: 2,
        tech: 'Redux',
      },
      {
        id: 3,
        tech: 'CSS',
      },
    ],
  },
  {
    id: 6,
    image: IMG6,
    title: 'GOA Buildind',
    detail: 'This is an app to showcase the skills of GOA Building, which is a Building company',
    github: 'https://github.com/dieum512/countries-app',
    demo: 'https://coutries-app.onrender.com/',
    stack: [
      {
        id: 1,
        tech: 'React',
      },
      {
        id: 2,
        tech: 'CSS',
      },
    ],
  },
];

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Works</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
      <div className="swiper__cont">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          loopFillGroupWithBlank
          slidesPerView={1}
          spaceBetween={20}
          slidesPerGroup={1}
        >
          {
          data.map((project) => (
            <SwiperSlide key={project.id} className="">
              <div className="portfolio__item-image">
                <img src={project.image} alt="" />
              </div>
              <div className="portfolio_item-details">
                <h3>{ project.title}</h3>
                <p>{project.detail}</p>
                <ul className="stack__container">
                  {
                    project.stack.map((stack) => (
                      <li key={stack.id}>
                        {stack.tech}
                      </li>
                    ))
                  }
                </ul>
                <div className="portfolio__item-cta">
                  <a href={project.github} className="btn" target="_blank" rel="noreferrer">Github</a>
                  <a href={project.demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
        </Swiper>
      </div>
    </div>
  </section>
);

export default Portfolio;
