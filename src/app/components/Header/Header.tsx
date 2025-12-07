'use client'

import './Header.css'
import Marquee from "./components/Marquee"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Header() {
    // I could pre-split these into arrays but I want to keep them readable
    const part1 = "Health insurance that".split(' ')
    const part2 = "doesn't".split(' ')
    const part3 = "get in".split(' ')
    const part4 = "the way.".split(' ')

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.timeline()
            .to(".green-phase-1", { delay: 3.2, duration: 0.4, color: "#30715D" })
            .to(".green-phase-2", { duration: 0.6, color: "#00B684" })
            .to(".green-phase-1", { duration: 0.6, color: "#00B684" })

        // TODO italicizing - waiting for Alex to get back to me
    });

    return (
        <div className="header-component green500 flex-center flex-wrap">
            {part1.map((part, index) => <h1 key={index}>{part}</h1>)}
            {part2.map((part, index) => <h1 key={index} className='green-phase-1'>{part}</h1>)}
            {part3.map((part, index) => <h1 key={index} className='green-phase-2'>{part}</h1>)}
            <Marquee />
            {part4.map((part, index) => <h1 key={index} className='green-phase-2'>{part}</h1>)}
        </div>
    )
}