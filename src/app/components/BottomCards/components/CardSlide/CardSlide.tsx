'use client'

import './CardSlide.css'

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

import Image, { StaticImageData } from "next/image";

import foxx from '../../../../../../public/images/cards/card1.png'
import bott from '../../../../../../public/images/cards/card2.png'
import alvarez from '../../../../../../public/images/cards/card3.png'
import wilder from '../../../../../../public/images/cards/card4.png'

import { useState } from "react";

export default function CardSlide() {
    const [insuranceCards, setInsuranceCards] = useState<StaticImageData[]>([
        alvarez,
        foxx,
        bott,
        wilder
    ])

    gsap.registerPlugin(useGSAP);

    const updateInsuranceCardOrder = (insuranceCards: StaticImageData[]) => {
        return () => {
            let newInsuranceCardOrder = [...insuranceCards]
            const lastElement = newInsuranceCardOrder.pop()

            if (lastElement) {
                newInsuranceCardOrder.unshift(lastElement)
            }

            setInsuranceCards(newInsuranceCardOrder)
        }
    }

    useGSAP(() => {
        gsap.timeline()
            .to(".card-item", { xPercent: 100, duration: 2 })
            .to(".card-item", { scale: 1.25, duration: 2 }, "+=1")
            .to(".card-item", { scale: 1, duration: 2 }, "+=2")
            .set(".card-item", { xPercent: 0, onComplete: updateInsuranceCardOrder(insuranceCards) })
    }, [insuranceCards]);

    return (
        <div className="card-slide-component flex-center card">
            <div className='card-slide-stripe flex-center'>
                {insuranceCards.map(card => {
                    return <Image className='card-item' key={card.src} src={card} alt={"example insurance card"} />
                })}
            </div>
        </div>
    )
}