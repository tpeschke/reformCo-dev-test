'use client'

import './CardSlide.css'

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

import Image from "next/image";

import foxx from '../../../../../../public/images/cards/card1.png'
import bott from '../../../../../../public/images/cards/card2.png'
import alvarez from '../../../../../../public/images/cards/card3.png'
import wilder from '../../../../../../public/images/cards/card4.png'

import horizontalLoop from '@/app/components/Header/components/utilities/horizontalLoop';

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
        const items = gsap.utils.toArray(".card-item")
        const timeline = horizontalLoop(items, {
            paused: true
        })

        setInterval(() => {
            timeline.next({duration: 0.5})
        }, 1000)
    });

    return (
        <div className="card-slide-component flex-center card">
            <div className='card-slide-stripe flex-center'>
                {insuranceCards.map((card, index) => {
                    return (
                        <div key={index} className='card-item flex-center'>
                            <Image src={card} alt={"example insurance card"} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}