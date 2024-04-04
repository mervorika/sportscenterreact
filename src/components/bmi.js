import React from "react";
import bmi from "../Resimler/bmi-index.jpg";

const Bmi = () => {
  return (
    <section className="bmi" id="bmi">
      <div className="bmiDiv">
        <div className="bmiCalculator">
          <span className="bmiCalculatorTitle">BMI Calculator</span>
          <span className="bmiCalculatorDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            aliquam sem at urna consequat tincidunt.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            aliquam sem at urna consequat tincidunt.
          </span>
          <div className="bmiCalculatorDiv">
            <div className="bmiHeight">
              <input id="height" placeholder="Your Height" />
              <span>cm</span>
            </div>
            <div className="bmiWeight">
              <input id="weight" placeholder="Your Weight" />
              <span>kg</span>
            </div>
          </div>
        </div>
      </div>
      <div className="yourBmiDiv">
        <span className="yourBmiTitle">Your BMI</span>
        <img src={bmi} />
        <div className="bmiArrow" id="bmiArrow" />
      </div>
    </section>
  );
};

export default Bmi;
