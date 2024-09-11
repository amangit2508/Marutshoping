import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Glasses"
            price="44.00"
            color="Black"
            badge={true}
            des="This is a portable glasses that is designed to be worn on the face or carried in the pocket."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Smartwatches"
            price="250.00"
            color="Black"
            badge={true}
            des="A smartwatch that offers extra functionality and connectivity on top of the features offered by standard watches."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Superbikes"
            price="80.00"
            color="Mixed"
            badge={true}
            des="Unleash the thrill of ultimate speed and precision with our cutting-edge superbikes, engineered for those who crave the ride of a lifetime."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Shirts for Mens"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Choosing the right shirt for yourself is the biggest issue resolved here."
          />
        </div>
        
      </Slider>
    </div>
  );
};

export default NewArrivals;
