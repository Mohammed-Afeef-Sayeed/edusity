import { useState } from "react";
import About from "./components/about/about";
import Campus from "./components/campus/campus";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Programs from "./components/programs/programs";
import Testimonials from "./components/testimonials/testimonials";
import Title from "./components/title/title";
import VideoPlayer from "./components/videoPlayer/videoPlayer";

const App = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What we Offer" />
        <Programs />
        <About setPlayVideo={setPlayVideo} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What our Alumini Says" />
        <Testimonials />
        <Title subTitle="Contact us" title="Get In Touch" />
        <Contact />
        <Footer />
        <VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo} />
      </div>
    </>
  );
};

export default App;
