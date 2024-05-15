import React from "react";
import Image from "next/image"
import Right from "@/app/components/icons/Right"

export default function Hero(){
    return(
        <section className="hero">

            <div className="py-12">
                <h1 className="text-4xl font-semibold">A piece of <span className="text-red-600">cake</span> makes everything better</h1>
                <p className="my-6 text-gray-500">Eating cake not only fills our tummies but makes our hearts full</p>

                <div className="flex gap-4 text-sm">
                <button className="bg-red-600 uppercase flex items-center gap-2 rounded-full text-white px-4 py-2">Order Now <Right/></button>
                <button className= "flex items-center gap-2 py-2 text-gray-600 font-semibold">Learn More <Right/> </button>
                </div>
            </div>
    
            <div className="relative">
              <Image src={'/Cake.jpeg'} layout="fill" objectFit="contain" alt={'cake'}/>
            </div>

        </section>
    );
}