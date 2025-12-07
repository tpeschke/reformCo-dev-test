'use client'

import './CardSlide.css'

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

import Image from "next/image";

import foxx from '../../../../../../public/images/cards/card1.png'
import bott from '../../../../../../public/images/cards/card2.png'
import alvarez from '../../../../../../public/images/cards/card3.png'
import wilder from '../../../../../../public/images/cards/card4.png'

import horizontalLoop from '@/app/utilities/horizontalLoop';

export default function CardSlide() {
    const insuranceCards = [
        foxx,
        bott,
        wilder,
        alvarez,
        foxx,
        bott,
        wilder,
        alvarez
    ]

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        const items: any[] = gsap.utils.toArray(".card-item")
        const timeline = horizontalLoop(items, {
            paused: true
        })

        async function scaleItem(items: any[], timeline: gsap.core.Timeline) {
            timeline.previous({ duration: 2, ease: "power2.inOut" })
            const currentIndex = (timeline.current() + 1) % items.length

            let scalingTimeline = gsap.timeline({
                onComplete: () => { scaleItem(items, timeline) }
            })
            scalingTimeline
                .to(items[currentIndex], { delay: 2, scale: 1.25, duration: 1, ease: "power3.inOut" })
                .to(items[currentIndex], { delay: 1.5, scale: 1, duration: 1, ease: "power3.inOut" })
        }

        scaleItem(items, timeline)
    });

    return (
        <div className="card-slide-component flex-center card">
            <div className='card-slide-stripe flex-center'>
                {insuranceCards.map((card, index) => {
                    return (
                        <div key={index} className={'card-item flex-center ' + index}>
                            <Image src={card} alt={"example insurance card"} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}