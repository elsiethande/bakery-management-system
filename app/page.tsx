import React from "react";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import AboutUs from "../components/layout/AboutUs";
import ContactUs from "../components/layout/ContactUs";

export default function Home(){
    return(
            <div>
               <Hero/> 
               <HomeMenu/>
               <AboutUs/>
                <ContactUs/>
            </div>
           
    );
}