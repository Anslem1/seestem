import React from "react";

function ImageSlider() {
     const images = [
          "../../../public/logos/apple.png",
          "../../../public/logos/amazon.png",
          "../../../public/logos/tesla.png",
          "../../../public/logos/meta.png",
          "../../../public/logos/google.png",
          "../../../public/logos/microsoft.png",
          "../../../public/logos/nvidia.png",
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
