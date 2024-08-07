import React from "react";
import heroImg02 from "../assets/images/1.png";
import heroImg01 from "../assets/images/3.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import videoIcon from "../assets/images/video-icon.png";
import featureImg from "../assets/images/2.png";
import faqImg from "../assets/images/5.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section className="hero__section pt-[60px] 2xl:h-[800px] mb-20 bg-blue-100">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Empowering Health, Enriching Lives.
                </h1>
                <p className="text__para">
                  At our medical center, we provide comprehensive care to help
                  you achieve optimal health and well-being. Our experienced
                  team is dedicated to supporting you every step of the way.
                </p>
                <Link to="/doctors">
                  <button className="btn">Request an Appointment</button>
                </Link>
              </div>

              {/* hero counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellow-500 rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purple-500 rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Locations</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* hero images */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={heroImg01} alt="Hero Image 1" className="w-full" />
              </div>
              <div className="mt-[30px]">
                <img
                  src={heroImg02}
                  alt="Hero Image 2"
                  className="w-full mb-[30px]"
                />
                {/* <img src={heroImg03} alt="Hero Image 3" className="w-full" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Providing the best medical services */}
      <section className="bg-gray-100 py-16">
        <div className="container">
          <div className="lg:w-[470px] mx-auto text-center">
            <h2 className="heading text-blue-800">
              Providing World-Class Medical Services
            </h2>
            <p className="text__para">
              Our health system offers unmatched, expert care to ensure the
              well-being of our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5 bg-white shadow-lg">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="Find a Doctor" />
              </div>
              <div className="mt-[30px] text-center">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
                  Expert healthcare from top specialists in various fields.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 bg-white shadow-lg">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="Find a Location" />
              </div>
              <div className="mt-[30px] text-center">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
                  Conveniently located clinics for easy access to care.
                </p>

                <Link
                  to="/locations"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 bg-white shadow-lg">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="Book Appointment" />
              </div>
              <div className="mt-[30px] text-center">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
                  Schedule appointments with ease for timely consultations.
                </p>

                <Link
                  to="/appointments"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* Our Medical Services */}
      <section className="bg-green-100 py-16">
        <div className="container">
          <div className="xl:w-[470px] mx-auto text-center">
            <h2 className="heading text-green-800">
              Comprehensive Medical Services
            </h2>
            <p className="text__para">
              Explore our wide range of medical services designed to meet all
              your health needs.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>

      {/* Feature Section */}
      <section className="review bg-white py-16">
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* feature content */}
            <div className="xl:w-[670]">
              <h2 className="heading text-yellow-800">
                Get Virtual Treatment Anytime
              </h2>
              <ul className="pl-4 text-yellow-700">
                <li className="text__para">
                  1. Schedule appointments directly
                </li>
                <li className="text__para">2. Know your health standards</li>
                <li className="text__para">
                  3. Be prepared to live a healthy life
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            {/* feature img */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} alt="Feature" className="w-3/4  " />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[600]">
                      10:00 AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow-500 py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="Video Icon" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Dr. Divyansh Bhat
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Great Doctors */}
      <section className=" bg-purple-100 py-16">
        <div className="container">
          <div className="xl:w-[470px] mx-auto text-center">
            <h2 className="heading text-purple-800">Meet Our Expert Doctors</h2>
            <p className="text__para">
              Our team of highly skilled doctors is here to provide you with
              exceptional care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-pink-100 review py-16">
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="FAQ" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading text-pink-800">
                Frequently Asked Questions
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-teal-100  py-16">
        <div className="container">
          <div className="xl:w-[470px] mx-auto text-center">
            <h2 className="heading text-teal-800">What Our Patients Say</h2>
            <p className="text__para">
              Hear from our patients about their experiences with our care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
