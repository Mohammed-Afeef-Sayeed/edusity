import React, { useRef } from "react";
import "./testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} className="next-btn" onClick={slideBackward} />
      <img src={back_icon} className="back-btn" onClick={slideForward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Afeef Sayeed</h3>
                  <span>India</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci minus voluptates optio cumque quis a temporibus
                perferendis, aspernatur laboriosam quas omnis iure nesciunt
                repellendus deserunt exercitationem accusantium ipsam.
                Dignissimos, nisi.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sai Vardhan</h3>
                  <span>India</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci minus voluptates optio cumque quis a temporibus
                perferendis, aspernatur laboriosam quas omnis iure nesciunt
                repellendus deserunt exercitationem accusantium ipsam.
                Dignissimos, nisi.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Amith</h3>
                  <span>India</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci minus voluptates optio cumque quis a temporibus
                perferendis, aspernatur laboriosam quas omnis iure nesciunt
                repellendus deserunt exercitationem accusantium ipsam.
                Dignissimos, nisi.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Sumeet Sharma</h3>
                  <span>India</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci minus voluptates optio cumque quis a temporibus
                perferendis, aspernatur laboriosam quas omnis iure nesciunt
                repellendus deserunt exercitationem accusantium ipsam.
                Dignissimos, nisi.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
