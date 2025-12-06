'use client'

import './Marquee.css'
import Image from "next/image";
import idCardIcon from '../../../../../public/images/id-card-icon.svg'
import { Fragment } from "react/jsx-runtime";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import horizontalLoop from './utilities/horizontalLoop';

// TODO the icon at the very end of the loop doesn't have a margin on the right
// I can't use margins or padding: you have to wrap the thing in a div with the extra space you want via its width

export default function Marquee() {
    const complaints = [
        "claim denials",
        "frustrated users",
        "unpredictable rate increases",
        "lack of transparency",
        "implementation headaches",
    ]

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        const items = gsap.utils.toArray(".marquee-item")
        horizontalLoop(items, {
            repeat: -1,
            speed: 0.5
        });
    });

    return (
        <div className="marquee-component green100-border">
            <div className='marquee-stripe'>
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