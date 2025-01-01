import React from "react";
import banner from "../Assets/section 1.jpg";
import logo from "../Assets/logo.png";
import section3 from "../Assets/section3.jpg";

const Landingpage = () => {
  const preventContextMenu = (e) => {
    e.preventDefault(); // Mencegah klik kanan
  };

  return (
    <div className="h-fit w-full bg-black font-poppins flex flex-col items-center scroll-smooth">
      {/* Navbar */}
      <div className="h-[35px] lg:h-[50px] w-[80%] lg:w-[20%] flex bg-[#670F10] rounded-[30px] bg-opacity-70 fixed mt-5 lg:mt-8 px-5 items-center justify-center gap-2 lg:text-[20px]">
        <img src={logo} alt="" className="h-[18px]" />
        <a href="#about" className="text-white">
          About
        </a>
        <a href="#offer" className="text-white">
          Offer
        </a>
        <a href="#project" className="text-white">
          Project
        </a>
        <a href="#contact" className="text-white">
          Contact
        </a>
      </div>
      {/* Section 1 */}
      <div className="w-full">
        <img
          src={banner}
          alt="Banner"
          className="w-full"
          draggable="false" // Mencegah drag
          onContextMenu={preventContextMenu} // Mencegah klik kanan
        />
      </div>
      {/* section 2 */}
      <div
        className="w-full h-fit bg-black text-white justify-center items-center text-justify flex flex-col px-11 gap-2 lg:px-20 lg:gap-10 mb-7 lg:mb-20"
        id="about"
      >
        <h1 className="text-[17px] font-medium lg:text-[50px]">
          <span className="bg-[#670F10] px-1">What</span> is{" "}
          <span className="italic">MeshCode?!</span>
        </h1>
        <p className="text-[11px] lg:text-[40px] font-light lg:px-[100px]">
          We are MeshCode offer website development services with modern and
          functional designs. Whether it’s a business website, portfolio, or
          e-commerce platform, we help bring the website that suits your needs
          to life!
        </p>
      </div>
      {/* Section 3 */}
      <div className="w-full h-fit flex flex-col items-center" id="offer">
        <h1 className="text-white font-medium lg:text-[50px]">
          What We <span className="bg-[#670F10] px-1">Offer?</span>
        </h1>
        <img
          className="w-full"
          src={section3}
          alt=""
          draggable="false"
          onContextMenu={preventContextMenu} // Mencegah klik kanan
        />
      </div>
      {/* Section 4 */}
      <div
        className="w-full h-fit text-white items-center flex flex-col text-[12px]"
        id="#project"
      >
        <h1 className="text-[16px] lg:text-[50px] font-medium mb-2 lg:mb-8">
          Our <span className="bg-[#670F10] px-1 ">Projects.</span>
        </h1>
        <h1 className="text-[12px] lg:text-[32px] bg-[#222222] w-[85%] justify-center flex py-2 rounded-xl mb-2 lg:mb-5">
          Infinite Learning inventory Loan Web Based System
        </h1>
        <h1 className="text-[12px] lg:text-[32px] bg-[#222222] w-[85%] justify-center flex py-2 rounded-xl mb-2 lg:mb-5">
          Employee Attendance Management System
        </h1>
        <h1 className="text-[12px] lg:text-[32px] bg-[#222222] text-center px-3 w-[85%] justify-center flex py-2 rounded-xl mb-2 lg:mb-5">
          Implementation of the gated recurrent unit method in predicting
          average temperature in Tanjungpinang
        </h1>
      </div>
      {/* Section 5 - Contact Us */}
      <div
        className="w-full h-[150px] lg:h-[300px] bg-gradient-to-b from-black to-[#670F10] items-center justify-center flex flex-col text-[12px] lg:text-[20px] text-white text-center "
        id="#contact"
      >
        <h1 className="mb-2 text-[17px] lg:text-[45px] lg:mb-8">
          <span className="bg-[#670F10] px-1 ">Contact</span> Us!
        </h1>
        <h1>meshcode.id@gmail.com</h1>
        <a href="https://www.instagram.com/meshcode.id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          Instagram - Click Here
        </a>
        <h1>0895383418428</h1>
      </div>
    </div>
  );
};

export default Landingpage;
