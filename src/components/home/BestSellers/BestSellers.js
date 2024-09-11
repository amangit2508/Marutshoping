import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Asus Vivobook"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Experience power and style in perfect harmony with the ASUS VivoBook, designed for those who work, create, and play without limits."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Mackbook-Pro"
          price="180.00"
          color="Gray"
          badge={false}
          des="Redefine performance and elegance with the MacBook where innovation meets seamless productivity."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName=" Predator"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Dominate the game with the Predator laptop, where fierce power and cutting-edge technology collide."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="HP"
          price="220.00"
          color="Black"
          badge={false}
          des="Empower your potential with the HP laptop, where reliability meets performance for every task."
        />
      </div>
    </div>
  );
};

export default BestSellers;
