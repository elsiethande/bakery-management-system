import React from "react";
import Image from "next/image";
import MenuItems from "@/app/components/menu/MenuItems";
import SectionHeaders from "@/app/components/layout/SectionHeaders";

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
            <SectionHeaders  
                subHeader={'Check out'}
                mainHeader={'Menu'}
            />
                
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