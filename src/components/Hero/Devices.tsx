interface DevicesProps {
     deviceImage: string;
     isFirst: string;
}

function Devices({ deviceImage, isFirst }: DevicesProps) {
     const deviceFrame = "/devicesMockUp/iphoneFrame.avif";
     return (
          <>
               <div className="device-content">
                    <div className="image-wrapper">
                         <img src={deviceFrame} alt="Device" />
                         <div className="overlay-div first-wrapper">
                              <img src={deviceImage} alt="" />

                              {isFirst == "true" && (
                                   <div className="first-device-wrapper">
                                        <div className="chart-info">
                                             <div>
                                                  <img
                                                       src="/public/devicesMockUp/chart-info/chart-briefing.png"
                                                       alt=""
                                                  />
                                             </div>
                                             <div>
                                                  <img
                                                       src="/public/devicesMockUp/chart-info/apple-chart.png"
                                                       alt=""
                                                  />
                                             </div>
                                        </div>
                                   </div>
                              )}
                         </div>
                    </div>
               </div>
          </>
     );
}

export default Devices;
