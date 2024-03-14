import React from "react";
import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import aboutImage from "../../assets/images/about/about.jpg";
import "../../Share/Style.css";
import Footer from "../../Share/Footer";
import UseData from "../../Hooks/UseData";
// import SliderCommon from "../../Share/SliderCommon";
import AboutCard from "./AboutCard";
import PageTitle from "../../Share/PageTitle";

const About = () => {
  const { local, serviceArray } = UseData();
  return (
    <>
      <PageTitle title="About"></PageTitle>
      {/* End pagetitle */}

      <section>
        <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]  px-4 sm:px-5 md:px-10 lg:px-20">
          <div data-aos="fade">
            <div className="py-12">
              {/* Page Title */}
              <h2 className="after-effect after:left-52 mt-12 lg:mt-0 ">
                About Me
              </h2>
              <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                <div className="col-span-12 md:col-span-4">
                  {/* personal images for about page  */}
                  <img
                    className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                    src={aboutImage}
                    alt=""
                  />
                </div>
                <div className="col-span-12 md:col-span-8 space-y-2.5">
                  {/* About me information */}
                  <div className=" md:mr-12 xl:mr-16">
                    <h3 className="text-4xl font-medium dark:text-white mb-2.5 ">
                      Who am I?
                    </h3>
                    <p className="text-gray-lite  dark:text-color-910 leading-7">
                    Hey there! Thanks for visiting my page. My name is Daniel, a Los Angeles based software engineer who specializes in creating websites and full stack apps for both personal and professional use.
                    </p>
                    <br></br>
                    <p className="text-gray-lite  dark:text-color-910 leading-7">
                    In addition to web design, I have a background in writing. So together we can shape and design a brand for your online needs. I especially love working with small businesses to create a web presence that expands their reach.
                    </p>
                    <br></br>
                  <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                    Other than coding, I spend my free time watching movies, checking out coffee shops, and caring for my cast iron pan. I've also been trying to play more games (both board and video), so feel free to reach out with recommendations!
                    </p>
                  </div>

                  
                </div>
              </div>
            </div>

            <div className="  pb-12 ">
              <h3 className="text-[35px] dark:text-white font-medium pb-5">
                Services
              </h3>
              <div className="grid gap-8 grid-cols-1 ">
                {/* Experience information  */}

                {serviceArray.map((item, i) => (
                  <AboutCard key={i} item={item} local={local} />
                ))}
              </div>
            </div>

          

            {/* Common Footer call here */}
            <Footer condition={false} bg={"#FFFF"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
