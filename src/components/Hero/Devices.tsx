function Devices() {
     const devices: string[] = [
          "../../../public/devices/1.avif",
          "../../../public/devices/2.avif",
          "../../../public/devices/3.avif",
     ];
     function DeviceNav() {
          return <>hi</>;
     }

     return (
          <>
               <div className="device-content">
                    <div className="image-wrapper">
                         <img src={devices[0]} alt="Device 1" />
                         <div className="overlay-div first-wrapper">
                              <DeviceNav />
                         </div>
                    </div>
                    {/* <div className="image-wrapper second-wrapper">
                         <img src={devices[0]} alt="Device 1" />
                         <div className="overlay-div"></div>
                    </div>
                    <div className="image-wrapper third-wrapper">
                         <img src={devices[0]} alt="Device 1" />
                         <div className="overlay-div"></div>
                    </div> */}
               </div>
          </>
     );
}

export default Devices;
