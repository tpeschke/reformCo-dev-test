'use client'

import './Header.css'
import Marquee from "./components/Marquee"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useState } from 'react';

interface Props {
    isPhone: boolean
}

export default function Header({ isPhone }: Props) {
    // I could pre-split these into arrays but I want to keep them readable
    const part1 = "Health insurance".split(' ')
    const part2 = "that".split(' ')
    const part3 = "doesn't".split(' ')
    const part4 = "get".split(' ')
    const [part5, setPart5] = useState<string[]>(["in"])
    const [part6, setPart6] = useState<string[]>(["", "the", "way."])


    useEffect(() => {
        setPart5((isPhone ? '' : "in").split(' '))
        setPart6((isPhone ? 'in the way.' : " the way.").split(' '))
    }, [isPhone])

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.timeline()
            .set(".green-phase-1", { color: "#152E2A" })
            .set(".green-phase-2", { color: "#152E2A" })
            .set(".final-italics", { skewX: 0 })
            .to(".green-phase-1", { delay: 3.2, duration: 0.4, color: "#30715D" })
            .to(".green-phase-2", { duration: 0.6, color: "#00B684" })
            .to(".green-phase-1", { duration: 0.6, color: "#00B684" })
            .to(".final-italics", { duration: 1, skewX: -17 })
    }, [part5, part6]);

    return (
        <div className='header-component flex-center'>
            <div className="h1-container green500 flex-center flex-wrap">
                {part1.map((part) => <h1 className='health-insurance' key={part}>{part}</h1>)}
                {part2.map((part) => <h1 key={part}>{part}</h1>)}
                {part3.map((part) => <h1 key={part} className='green-phase-1 final-italics'>{part}</h1>)}
                <div className="line-break"></div>
                {part4.map((part) => <h1 key={part} className='green-phase-2 final-italics'>{part}</h1>)}
                <div className="line-break-2"></div>
                {part5.map((part) => <h1 key={part} className='green-phase-2 final-italics'>{part}</h1>)}
                <Marquee />
                {part6.map((part) => <h1 key={part} className='green-phase-2 final-italics'>{part}</h1>)}
            </div>
        </div>
    )
}