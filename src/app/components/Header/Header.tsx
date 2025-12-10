'use client'

import './Header.css'
import Marquee from "./components/Marquee"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { use, useEffect, useState } from 'react';

interface Props {
    isPhone: boolean
}

export default function Header({ isPhone }: Props) {
    const [part5, setPart5] = useState<string>("in")
    const [part6, setPart6] = useState<string>("the way.")

    useEffect(() => {
        setPart5(isPhone ? '' : "in")
        setPart6(isPhone ? 'in the way.' : " the way.")
    }, [isPhone])

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.timeline()
            .set(".green-phase-1", { delay: 3.5, color: "#152E2A" })
            .set(".green-phase-2", { color: "#152E2A" })
            .set(".final-italics", { skewX: 0 })
            .to(".green-phase-1", { delay: 3.2, duration: 0.4, color: "#30715D" })
            .to(".green-phase-2", { duration: 0.6, color: "#00B684" })
            .to(".green-phase-1", { duration: 0.6, color: "#00B684" })
            .to(".final-italics", { duration: 1, skewX: -17 })
    }, [part5, part6]);

    return (
        <div className='header-component flex-center'>
            <div className="h1-container flex-center flex-wrap">
                <h1 className='health-insurance green500'>Health insurance</h1>
                <div className="line-break"></div>
                <h1 className='green500'>that</h1>
                <h1 className='green-phase-1 final-italics green500'>doesn't</h1>
                <div className="line-break"></div>
                <h1 className='green-phase-2 final-italics green500'>get</h1>
                <div className="line-break-2"></div>
                <h1 className='green-phase-2 final-italics green500'>{part5}</h1>
                <Marquee isPhone={isPhone} />
                <h1 className='green-phase-2 final-italics green500'>{part6}</h1>
            </div>
        </div>
    )
}