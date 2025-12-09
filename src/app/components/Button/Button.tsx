'use client'

import { useState } from 'react';
import './Button.css'
import Circle from './components/Circle'

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import horizontalLoop from '@/app/utilities/horizontalLoop';

interface Props {
    children: string
}

export default function Button({ children }: Props) {
    const [activeTagIndex, setActiveTagIndex] = useState<0 | 1>(0)

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

            document.getElementById("button-component")?.addEventListener("click", animateArrow)
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

    const ease = "power3.in"

    const swapButtons = () => {
        gsap.to(".circle-arrow-button", { x: -233, ease })
        fadeImage(1)
        gsap.to("#main-button", { x: 58, color: '#00B684', border: '1px solid #00B684', ease })
    }

    const resetButtons = () => {
        gsap.to(".circle-arrow-button", { x: 0, ease })
        fadeImage(0)
        gsap.to("#main-button", { x: 0, color: '#30715D', border: '1px solid #30715D', ease })
    }

    const fadeImage = async (index: 0 | 1) => {
        await new Promise(resolve => setTimeout(resolve, 200))
        setActiveTagIndex(index)
    }

    return (
        <div id="button-component" className="button-component" onMouseOver={swapButtons} onMouseOut={resetButtons}>
            <button id='main-button' className="green400">{children}</button>
            <Circle activeTagIndex={activeTagIndex} />
        </div>
    )
}