import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

// AOS.init({
//   useClassNames: true,
//   initClassName: false,
//   animatedClassName: 'animated',
// });
AOS.init()
const Home = () => {
  return (
    <>
      <section id="homeContainer">
        <div className="details" data-aos="fade-up" data-aos-duration="1000">
          <h1>Welcome to Income || Expense Tracker</h1>
          <p>
            Manage your personal finances and daily expenses with ease. Income
            Expense - daily expenses is a simple and powerful expense tracker
            that helps you to track your income and expenses, create budgets,
            and stay on top of your finances.
          </p>
        </div>
        <div className="image" data-aos="fade-left" data-aos-duration="1000">
          <img
            src="https://s.cafebazaar.ir/images/icons/ir.papiloo.moneywallet-65dfbd7d-93bc-4582-83ee-623a80199c08_512x512.webp?x-img=v1/resize,h_256,w_256,lossless_false/optimize"
            alt="tracker-image"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
