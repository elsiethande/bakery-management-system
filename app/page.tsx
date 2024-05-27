
import React from "react";
import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/layout/Hero";
import HomeMenu from "@/app/components/layout/HomeMenu";
import AboutUs from '@/app/components/layout/AboutUs'

export default function Home(){
    return(
        <>
            <Header/>
            <Hero/>
            <HomeMenu/>
            <AboutUs/>
        </>
    );
}