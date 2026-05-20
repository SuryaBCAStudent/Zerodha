import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <div className="product-page">
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productname="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        productname="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productname="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productname="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productname="Varsity"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center fs-5 mt-5 mb-4">Want to know more about our technology stack? Check out the <a href="https://zerodha.tech" className="text-decoration-none">Zerodha Tech</a> Blog.</p>
      <Universe />
    </div>
  );
}

export default ProductPage;
