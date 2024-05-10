import React from "react";
import Link from "next/link"

export default function Header(){
    return(
        <header className='flex items-center justify-between'>
                <Link className="text-red-600 font-semibold text-2xl" href="#">Logo</Link> 
                <nav className="flex items-center gap-8 text-gray-600 font-semibold">
                <Link href="#">Home</Link> 
                <Link href="#">Menu</Link> 
                <Link href="#">About</Link> 
                <Link href="#">Contacts</Link> 
                <Link href="#" className="bg-red-600 rounded-full text-white px-8 py-2">Login</Link> 
                </nav>
            </header>
    );

}