'use client'

import './Marquee.css'
import Image from "next/image";
import idCardIcon from '../../../../../public/images/id-card-icon.svg'
import { Fragment } from "react/jsx-runtime";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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
        gsap.to(".marquee-item-container", { xPercent: -100, repeat: -1, duration: 10, ease: "linear" }).totalProgress(0.5);
        gsap.set(".marquee-moving-stripe", { xPercent: -50 });
    });

    return (
        <div className="marquee-component green100-border">
            <div className='marquee-moving-stripe'>
                <div className='marquee-item-container'>
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
        </div>
    )
}