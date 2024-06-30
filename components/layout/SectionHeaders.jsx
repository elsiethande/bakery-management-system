import React from "react";

export default function SectionHeaders({subHeader, mainHeader}){
    return(
        <>
         <div className="text-center mt-5 mb-4">
                <h3 className="uppercase text-gray-500 font-semibold leading-4">{subHeader}</h3>
                <h1 className="text-red-500 font-bold text-4xl ">{mainHeader}</h1>
            </div>
        </>
    );
}