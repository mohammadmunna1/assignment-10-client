import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: " Zara",
    job: "CEO of Popen",
    image: "https://deadline.com/wp-content/uploads/2020/09/Gugu-Mbatha-Raw-e1610021013129.jpg?w=681&h=383&crop=1",
    review:
      "it was amazing experience at this Italian food place. The platter was delicious and the service was excellent. I highly recommend it to anyone looking for a great dining experience.",
  },
  {
    id: 2,
    name: "Sara",
    job: " hostess",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75Aim22hoYp8_uHMevcliYS-4a6iIErvLPQ&usqp=CAU",
    review:
      "it is the best Italian restaurant I've ever been to. The pasta is homemade and the sauces are delicious. The atmosphere is also great. I will definitely be back!",
  },
  {
    id: 3,
    name: "doe",
    job: "Us uim",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZRcbY1PjNZ0b_h6r85Z9JiBPdaExa528rQ&usqp=CAU",
    review:
      " food was amazing. Everything from the appetizers to the desserts was delicious. The service was also fantastic. I can't wait to come back!",
  },
];


const CustomerReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div>
      <h2 className='md:text-5xl text-3xl text-center font-semibold text-white mb-10'> Review</h2 >
      <div style={{ backgroundColor: '#212A3E' }} className="text-white text-center lg:max-w-lg md:max-w-md max-w-xs mx-auto rounded-2xl">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-8 py-8 pt-8 pb-8 ">
              <img className='rounded-full w-20 mx-auto mt-5' src={review.image} alt="" />
              <p className="mb-10  text-orange-500 text-black mx-5 py-3 px-5 rounded-lg">{review.review}</p>
              <p className="text-xl text-orange-500 my-1">{review.name}</p>
              <p className="text-xs">{review.job}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
          );
};

export default CustomerReview;