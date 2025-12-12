'use client'

import './Header.css'
import Marquee from "./components/Marquee"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useState } from 'react';
import { mediaQueryHook } from '@/app/utilities/mediaQueryHook';

export default function Header() {
    const isPhone = mediaQueryHook(500)
    const isTablet = mediaQueryHook(1024)
    const isDesktop = mediaQueryHook(1440)
    const isBeyondDesktop = mediaQueryHook(1441)

    const [part1, setPart1] = useState<string>("")
    const [part2, setPart2] = useState<string>("get in")
    const [part3, setPart3] = useState<string>("the way.")

    useEffect(() => {
        setPart1(isPhone ? 'get' : "")
        setPart2(isPhone ? '' : "get in")
        setPart3(isPhone ? 'in the way.' : " the way.")
    }, [isPhone])

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.timeline()
            .set(".green-phase-1", { clearProps: "all" })
            .set(".green-phase-2", { clearProps: "all" })
            .set(".final-italics", { skewX: 0 })
            .to(".green-phase-1", { delay: 6.7, duration: 0.4, color: "#30715D" })
            .to(".green-phase-2", { duration: 0.6, color: "#00B684" })
            .to(".green-phase-1", { duration: 0.6, color: "#00B684" })
            // I've noticed that "doesn't" starts skewing a little ahead of the rest of the header but I couldn't figure out why
            // I don't think anyone would notice; I might be hallucinating it since I've stared so long as this animation.
            .to(".final-italics", { duration: 1, skewX: -17 })
    }, [isPhone, isTablet, isDesktop, isBeyondDesktop]);

    return (
        <div className='header-component flex-center'>
            <div className="h1-container">
                <h1 className='health-insurance green500'>
                    Health insurance
                    <span className='green500'>&nbsp;that</span>
                    <span className='final-italics green-phase-1 green500'>&nbsp;doesn't</span>
                    <span className='final-italics green-phase-2 green500'>&nbsp;{part1}</span>
                </h1>
                <h1 className='final-italics green-phase-2 green500'>{part2}</h1>
                <Marquee isPhone={isPhone} isTablet={isTablet} isDesktop={isDesktop} isBeyondDesktop={isBeyondDesktop} />
                <h1 className='final-italics green-phase-2 green500'>{part3}</h1>
            </div>
        </div>
    )
}