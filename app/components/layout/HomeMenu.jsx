import React from "react";
import Image from "next/image";

export default function HomeMenu(){
    return(
        <section>
            <div className="absolute left-0 right-0">
                <div className="h-48 w-48 absolute left-0">
                    <Image src={'/Strawberries.jpeg'} layout="fill"
                    objectFit="container" alt={'strawberries'}/>
                </div>
                <div className="h-48 w-48 absolute -top-24 right-0">
                    <Image src={'/Chocolatechips.jpeg'} layout="fill"
                    objectFit="container" alt={'chips'}/>
                </div>
            </div>
            <div className="text-center">
                <h3 className="uppercase text-gray-500 font-semibold leading-4">Check out</h3>
                <h1 className="text-red-500 font-bold text-4xl ">Menu</h1>
            </div>
        </section>
    );
}