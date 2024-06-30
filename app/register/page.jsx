"use client";
import React from "react";
import Image from 'next/image';
import {useState} from "react";

export default function RegisterPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleFormSubmit(ev){
        ev.preventDefault();
        fetch('/api/register',{
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers: {'Content-type': 'application/JSON'}
        });
    }
    return(
        <section className="mt-8">
            <h1 className="text-center text-red-600 text-4xl">Register</h1>
            <form className="block max-w-xl mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="Enter email address" value={email}
                    onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder="Enter password" value={password}
                        onChange={ev => setPassword(ev.target.value)}/>
                <button type="submit">Register</button>
                <div className="text-center py-4 px-4">or Login with provider</div>
                <button className="flex gap-4 justify-center rounded-xl"> 
                    <Image src={'/google.png'} alt={'google'} width={28} height={28}/>Login with Google
                    </button>
            </form>
        </section>
    );
}