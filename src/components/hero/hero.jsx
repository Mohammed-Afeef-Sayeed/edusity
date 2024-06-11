import "./hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure Better Education</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          tempora cum dicta soluta, in rerum voluptatem magni praesentium quo?
          Similique qui sed ut consectetur, odio ab. Debitis cum laborum et.
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
