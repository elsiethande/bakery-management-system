import React from "react";
import Image from "next/image";
import MenuItems from "@/app/components/menu/MenuItems";

export default function HomeMenu(){
    return(
        <section>
            <div className="absolute left-0 right-0 justify-start">
                <div className="h-48 w-48 absolute -top-{70px} left-0">
                    <Image src={'/Strawberries.jpeg'} layout="fill"
                    objectFit="container" alt={'strawberries'}/>
                </div>
                <div className="h-48 w-48 absolute -top-{100px} right-0">
                    <Image src={'/Chocolatechips.jpeg'} layout="fill"
                    objectFit="container" alt={'chips'}/>
                </div>
            </div>
            <div className="text-center mb-4">
                <h3 className="uppercase text-gray-500 font-semibold leading-4">Check out</h3>
                <h1 className="text-red-500 font-bold text-4xl ">Menu</h1>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
            </div>
        </section>
    );
}