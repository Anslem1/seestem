function ImageSlider() {
     const images = [
          "/sliderLogos/apple.png",
          "/sliderLogos/amazon.png",
          "/sliderLogos/tesla.png",
          "/sliderLogos/meta.png",
          "/sliderLogos/google.png",
          "/sliderLogos/microsoft.png",
          "/sliderLogos/nvidia.png",
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
