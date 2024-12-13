import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";

//import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

//import SwiperStyle
import "swiper/css";
import "swiper/css/pagination";

//? using method of map
const data = [
  {
    avatar: AVTR1,
    name: "Afzal Hashmi",
    review:
      "Lorem Ipsum is a type of placeholder text widely used in the printing and typesetting industry since the 1500s. It originated from a scrambled version of a Latin text written by an unknown printer, which was later used as a demonstration",
  },
  {
    avatar: AVTR2,
    name: "Kaif Hashmi",
    review:
      "Lorem Ipsum is a type of placeholder text widely used in the printing and typesetting industry since the 1500s. It originated from a scrambled version of a Latin text written by an unknown printer, which was later used as a demonstration",
  },
  {
    avatar: AVTR3,
    name: "Irshad Ali",
    review:
      "Lorem Ipsum is a type of placeholder text widely used in the printing and typesetting industry since the 1500s. It originated from a scrambled version of a Latin text written by an unknown printer, which was later used as a demonstration",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from, clients</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="clinet__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
