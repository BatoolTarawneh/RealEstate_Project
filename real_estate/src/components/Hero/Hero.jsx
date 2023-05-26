import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUP from "react-countup";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="purple-circle" />
            <h1>
              Are You Looking For Property ?<br />
              Dicover Our WebSite !
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span>
              Find a property you want here!! alot of AMAZING properties are
              waiting
            </span>{" "}
            <br />
            <span>The Most Trustworthy Real Estate Service in Jordan</span>
          </div>
          <div className=" flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                {/* countup is a library it takes start and end parameter */}
                <CountUP start={8000} end={9500} duration={3} />
                <span >+</span>
              </span>
              <span>Sold Real Estate</span>
            </div>

            <div className="flexColStart stat">
              <span>
                {/* countup is a library it takes start and end parameter */}
                <CountUP start={14800} end={15000} duration={3} />
                <span>+</span>
              </span>
              <span>Visitors</span>
            </div>

            <div className="flexColStart stat">
              <span>
                {/* countup is a library it takes start and end parameter */}
                <CountUP start={4} end={10} duration={3} />
                <span>+</span>
              </span>
              <span>Awards</span>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./assets/hero-image.jpg" alt="heroimage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
