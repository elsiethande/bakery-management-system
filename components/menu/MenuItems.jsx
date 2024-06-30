import React from "react";

export default function MenuItems(){
    return(
        <div className="bg-gray-300 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25
            transition-all">
            <div className="text-center ">
                <img src={"/Blueberry.jpeg"} className="max-h-auto max-w-18 block mx-auto" alt="cake"/>
            </div>
            <h4 className="font-semibold text-xl my-3">Blueberry cake</h4>
            <p className="text-gray-500 text-sm">It contains layers of blueberries</p>
            <button className="mt-4 bg-red-500 text-white rounded-full px-8 py-2">Add to Cart</button>
        </div>
    );
}