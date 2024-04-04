import React from "react";

const SignUpBanner = () => {
  return (
    <section className="signUpBanner" id="home">
      <div className="signUpBannerDiv">
        <div className="bannerName">
          <span>POWERFULL</span>
        </div>
        <div className="bannerTitle">Group Practice With Trainer</div>
        <div className="bannerContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          aliquam sem at urna consequat tincidunt. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Proin pretium, neque sed viverra
          sodales, nibh lorem pellentesque lectus, eu dignissim urna sem et ex.
          Nam a urna hendrerit, vestibulum metus ut, elementum turpis.
        </div>
        <div className="bannerButtons">
          <a href> Sign Up </a>
          <a href id="details">
            {" "}
            Details{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignUpBanner;
