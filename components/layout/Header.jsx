import React from "react";
import Link from "next/link";

export default function Header(){
    return(
        <header className='flex items-center justify-between gap-4'>
                
                <nav className="flex items-center gap-8 text-gray-600 font-semibold">
                <Link className="text-red-600 font-semibold text-2xl" href="#">Logo</Link>
                <Link href="#">Home</Link> 
                <Link href="#">Menu</Link> 
                <Link href="#">About</Link> 
                <Link href="#">Contacts</Link> 
                
                </nav>
                <nav className="flex items-center gap-4 text-gray-600 font-semibold">
                <Link href={'/login'}>Log in</Link>
                <Link href={'/register'} className="bg-red-600 rounded-full text-white px-8 py-2">Register</Link> 
                </nav>
            </header>
    );

}