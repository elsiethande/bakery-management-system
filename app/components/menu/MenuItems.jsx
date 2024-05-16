import React from "react";

export default function MenuItems(){
    return(
        <div className="bg-gray-300 p-4 rounded-lg text-center hover:bg-white">
            <img src={'/Blueberry.jpeg'} alt={"cake"}/>
            <h4 className="font-semibold text-xl my-2">Blueberry Cake</h4>
            <p className="text-gray-500 text-sm">Has layers of blueberries</p>
            <button className="mt-4 bg-red-600 text-white text-center py-2 px-4 rounded-full">Add To Cart</button>
        </div>
    );
}