import React from "react";
import SectionHeaders from "./SectionHeaders";
import Slider from "./Carousel"

export default function AboutUs(){
    return(
        <section className="text-center my-16">
        <SectionHeaders
            subHeader={'Our story'}
            mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-2xl mx-auto ">
        <p >We make cakes for all events i.e.,Birthdays, Graduations, Baby showers, Anniversarirs,
             Milestone celebrations, Ruracios etc
        </p>
        <p>Here are some designs we have been able to execute from inspos shared by clients</p>
        </div>
        <div className="w-[40%] h-30 m-auto pt-11 ">
            <Slider/>
        </div>
        </section>
    );
}