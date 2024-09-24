import React from "react";

function ImageSlider() {
     const images = [
          "../../../public/sliderLogos/apple.png",
          "../../../public/sliderLogos/amazon.png",
          "../../../public/sliderLogos/tesla.png",
          "../../../public/sliderLogos/meta.png",
          "../../../public/sliderLogos/google.png",
          "../../../public/sliderLogos/microsoft.png",
          "../../../public/sliderLogos/nvidia.png",
     ];

     return (
          <>
               <div className="image-slider">
                    {images.map((image: string) => {
                         return <img src={image} alt="" />;
                    })}
               </div>
          </>
     );
}

export default ImageSlider;
