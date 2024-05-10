import React from "react";
import Image from "next/image"

export default function Hero(){
    return(
        <section>
            <h1>A piece of cake makes everything better</h1>
            <p>Eating cake not only fills our tummies but makes our hearts full</p>
           <div className="w-16 h-16 relaative">
           <Image src={'/Blueberry.jpeg'} layout={'fill'} objectFit={"contain"} alt={'cake'}/>
           </div>
        </section>
    );
}