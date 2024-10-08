import Devices from "./Devices";
import "./Hero.css";
import ImageSlider from "./ImageSlider";
import Mockup from "./Mockup";

function Hero() {
     return (
          <>
               <div className="hero-container">
                    <div>
                         <div className="photos-container">
                              <div>
                                   <img
                                        src="../../../public/images/IMG_0025.jpg"
                                        alt=""
                                   />
                                   <p>Val</p>
                              </div>
                              <div>
                                   <img
                                        src="../../../public/images/IMG_0025.jpg"
                                        alt=""
                                   />
                                   <p>Igor</p>
                              </div>
                              <div>
                                   <img
                                        src="../../../public/images/IMG_0025.jpg"
                                        alt=""
                                   />
                                   <p>Marina</p>
                              </div>
                              <div>
                                   <img
                                        src="../../../public/images/IMG_0025.jpg"
                                        alt=""
                                   />
                                   <p>Dina</p>
                              </div>
                              <div>
                                   <img
                                        src="../../../public/images/IMG_0025.jpg"
                                        alt=""
                                   />
                                   <p>Phil</p>
                              </div>
                         </div>
                         <h1>
                              World-class design for{" "}
                              <span> Saas & Tech companies</span>
                         </h1>
                         <p>
                              We create products that serves both users{" "}
                              <span>
                                   {" "}
                                   and businesses and drives and drives real
                                   results.
                              </span>
                         </p>
                         <div className="book-a-call">
                              <div className="book-btn">
                                   <div>
                                        <img
                                             src="../../../public/images/IMG_0025.jpg"
                                             alt=""
                                        />
                                        <span>+</span>
                                        <div></div>
                                   </div>
                                   <p>Book a 15-min call </p>
                              </div>
                              <div>
                                   <div className="green-dot">
                                        <div></div>
                                   </div>
                                   <p>2 Spots Available</p>
                              </div>
                         </div>
                         <div className="animated-scroll">
                              <ImageSlider />
                         </div>
                    </div>
                    <div className="device-container">
                         <Devices
                              deviceImage="/public/devicesMockUp/device-1.png"
                              isFirst="true"
                         />
                         <Devices
                              deviceImage="/public/devicesMockUp/device-2.png"
                              isFirst="false"
                         />
                         <Devices
                              deviceImage="/public/devicesMockUp/device-3.png"
                              isFirst="false"
                         />
                    </div>
                    <div className="site-mockup-container">
                         <Mockup />
                         <Mockup />
                    </div>
               </div>
          </>
     );
}

export default Hero;
