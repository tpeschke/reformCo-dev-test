'use client'

import './Marquee.css'
import Image from "next/image";
import idCardIcon from '../../../../../public/images/id-card-icon.svg'
import { Fragment } from "react/jsx-runtime";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import horizontalLoop from './utilities/horizontalLoop';

export default function Marquee() {
    const complaints = [
        "claim denials",
        "frustrated users",
        "unpredictable rate increases",
        "lack of transparency",
        "implementation headaches",
        "claim denials",
        "frustrated users",
        "unpredictable rate increases",
        "lack of transparency",
        "implementation headaches"
    ]

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        const boxes = gsap.utils.toArray(".marquee-item")
        horizontalLoop(boxes, {
            repeat: -1,
            speed: 0.5
        });
        // const marqueeItemContainer = document.getElementById('marquee-item-container') as HTMLElement | null
        // const scrollLength = marqueeItemContainer ? marqueeItemContainer.offsetWidth * -1 : 0
        // gsap.to(".marquee-item-container", { x: scrollLength, repeat: -1, duration: 1, ease: "linear" });
    });

    return (
        <div className="marquee-component green100-border">
            <div className='marquee-moving-stripe'>
                {complaints.map((complaint, index) => {
                    return (
                        <Fragment key={index}>
                            <p className="marquee-item title orange">{complaint}</p>
                            <Image className='marquee-item' src={idCardIcon} alt={"id card icon"} />
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}