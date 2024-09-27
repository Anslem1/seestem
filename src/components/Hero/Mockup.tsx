import React, { ReactNode } from "react";
import Tab from "./safari-nav-icon/Tab";
import LeftArrow from "./safari-nav-icon/LeftArrow";
import RightArrow from "./safari-nav-icon/RightArrow";
import Refresh from "./safari-nav-icon/Refresh";
import Lock from "./safari-nav-icon/Lock";
import Link from "./safari-nav-icon/Link";
import Download from "./safari-nav-icon/Download";
import NewTab from "./safari-nav-icon/NewTab";

interface SafariFrameProps {
     url: string;
     children: ReactNode;
}

function Mockup() {
     function SafariFrame({ url, children }: SafariFrameProps): JSX.Element {
          return (
               <>
                    <div className="safari-container">
                         <a className="safari-content" href={url}>
                              <div className="safari-nav-container">
                                   <div>
                                        <div className="action-btn-container">
                                             <div className="safari-action-btn"></div>
                                             <div className="safari-action-btn"></div>
                                             <div className="safari-action-btn"></div>
                                        </div>
                                        <div className="svg-container">
                                             <div>
                                                  <Tab />
                                                  <div className="nav-controls">
                                                       <LeftArrow />
                                                       <RightArrow />
                                                  </div>
                                                  <Refresh />
                                             </div>
                                        </div>
                                   </div>
                                   <div className="search-bar-container">
                                        <Lock />
                                        <div className="search-bar">
                                             <a href={url}>{url}</a>
                                        </div>
                                        <Link />
                                   </div>
                                   <div className="download-new-tab-container">
                                        <Download />
                                        <NewTab />
                                   </div>
                              </div>
                              <div className="site-mockup-container">
                                   {children}
                              </div>
                         </a>
                    </div>
               </>
          );
     }

     return (
          <>
               <div className="site-mockup-container">
                    <div className="site-mockup-content" >
                         <SafariFrame url="http://marinabudarina.design">
                              <img src="/public/siteMockups/3.webp" alt="" />
                         </SafariFrame>
                    </div>
               </div>
          </>
     );
}

export default Mockup;
