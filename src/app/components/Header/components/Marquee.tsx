'use client'

import './Marquee.css'
import Image from "next/image";
import idCardIcon from '../../../../../public/images/id-card-icon.svg'
import { Fragment } from "react/jsx-runtime";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import horizontalLoop from '@/app/utilities/horizontalLoop';

interface Props {
    isPhone: boolean
}

export default function Marquee({ isPhone }: Props) {
    const complaints = [
        "claim denials",
        "frustrated users",
        "unpredictable rate increases",
        "lack of transparency",
        "implementation headaches",
    ]

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        // const items = gsap.utils.toArray(".marquee-item")
        // horizontalLoop(items, {
        //     repeat: -1,
        //     speed: 0.5
        // });

        // const finalMargin = isPhone ? -11 : -25
        // gsap.to(".marquee-component", { delay: 4.5, duration: 2.6, width: 0, height: 0, margin: finalMargin, ease: "expo.inOut" })
    }, [isPhone]);

    return (
        <>
            <div className="marquee-component green100-border">
                <div className='marquee-stripe'>
                    {complaints.map((complaint, index) => {
                        return (
                            <Fragment key={index}>
                                <p className="marquee-item title orange">{complaint}</p>
                                <div className='marquee-item icon flex-center'>
                                    <Image src={idCardIcon} alt={"id card icon"} />
                                </div>
                            </Fragment>
                        )
                    })}
                </div>
            </div>
        </>
    )
}