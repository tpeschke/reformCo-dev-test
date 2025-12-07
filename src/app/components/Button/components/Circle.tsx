'use client'

import './Circle.css'
import Image from "next/image";
import arrowCircleGreen400 from "../../../../../public/images/arrows/arrow-circle-green-400.svg"
import arrowCircleGreen200 from "../../../../../public/images/arrows/arrow-circle-green-200.svg"
import arrowGreen400 from "../../../../../public/images/arrows/arrow-green-400.svg"
import arrowGreen200 from "../../../../../public/images/arrows/arrow-green-200.svg"

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import horizontalLoop from '@/app/utilities/horizontalLoop';

interface Props {
    activeTagIndex: 0 | 1
}

export default function Circle({ activeTagIndex }: Props) {
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        if (activeTagIndex === 1) {
            const timeline = createTimeline()

            const animateArrow = () => {
                if (timeline) {
                    timeline.previous({ duration: 0.6 })
                    createTimeline()
                }
            }

            document.getElementById("active-forward-arrow")?.addEventListener("mouseenter", animateArrow)
        }
    }, [activeTagIndex]);

    const createTimeline = (): gsap.core.Timeline | null => {
        const items: any[] = gsap.utils.toArray(".forward-arrow")
        if (items.length > 0) {
            const timeline = horizontalLoop(items, {
                paused: true
            })

            return timeline
        }

        return null
    }

    switch (activeTagIndex) {
        case 0:
            return (
                <div className='circle-arrow-button'>
                    <Image src={arrowCircleGreen400} alt={"id card icon"} />
                    {/* Even though nobody gets to see the other two arrows, I'm putting them here to make styling easier for me */}
                    <div className='flex-center'>
                        <div className='forward-arrow'>
                            <Image src={arrowGreen400} alt={"forward arrow"} />
                        </div>
                        <div className='forward-arrow'>
                            <Image src={arrowGreen400} alt={"forward arrow"} />
                        </div>
                        <div className='forward-arrow'>
                            <Image src={arrowGreen400} alt={"forward arrow"} />
                        </div>
                    </div>
                </div>
            )
        case 1:
            return (
                <div id="active-forward-arrow" className='circle-arrow-button'>
                    <Image src={arrowCircleGreen200} alt={"id card icon"} />
                    <div className='flex-center'>
                        <div className='forward-arrow'>
                            <Image src={arrowGreen200} alt={"forward arrow"} />
                        </div>
                        <div className='forward-arrow'>
                            <Image src={arrowGreen200} alt={"forward arrow"} />
                        </div>
                        <div className='forward-arrow'>
                            <Image src={arrowGreen200} alt={"forward arrow"} />
                        </div>
                    </div>
                </div>
            )
    }
}