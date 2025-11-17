import React from 'react'
import Continar from './Continar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Sliderimg1 from "../assets/slise/WhatsApp Image 2025-11-17 at 02.00.43_cc6a6a42.jpg"
import Sliderimg2 from "../assets/slise/WhatsApp Image 2025-11-17 at 02.00.43_dbfde4d8.jpg"
import Sliderimg3 from "../assets/slise/WhatsApp Image 2025-11-17 at 02.00.44_7d3fc7e2.jpg"
import Sliderimg4 from "../assets/slise/WhatsApp Image 2025-11-17 at 02.00.44_b231480b.jpg"
import Sliderimg5 from "../assets/slise/WhatsApp Image 2025-11-17 at 02.00.44_e911236e.jpg"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={className}
      onClick={onClick}
    />
  );
}


const BanarPart = () => {
  const SliderRef = React.useRef(null)
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (


    <Continar>
      <div className=" z-[-111] relative">
        <div onClick={() => SliderRef.current.slickPrev()} className=" cursor-pointer absolute z-10 top-30 left-0 text-4xl bg-gray-200 py-3 px-2 w-[50px]">
          <FaArrowRight />
        </div>
        <div onClick={() => SliderRef.current.slickNext()} className=" cursor-pointer absolute z-10 top-30 right-0 text-4xl bg-gray-200 py-3 px-2 w-[50px]">
          <FaArrowLeft />
        </div>
        <Slider ref={SliderRef} {...settings}>

          <div className='w-full  h-140 '>
            <img className='h-full' src={Sliderimg1} alt="" />
          </div>
          <div className='w-full  h-140 '>
            <img className='h-full' src={Sliderimg2} alt="" />
          </div>
          <div className='w-full  h-140'>
            <img className='h-full' src={Sliderimg3} alt="" />
          </div>
          <div className='w-full  h-140'>
            <img className='h-full' src={Sliderimg4} alt="" />
          </div>
          <div className='w-full  h-140'>
            <img className='h-full' src={Sliderimg5} alt="" />
          
          </div>

        </Slider>

      </div>
    </Continar>
  )
}

export default BanarPart
