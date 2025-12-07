'use client'

// Even though this button is only used once in this project, it seems like a component we'd want to reuse
// in different places on the site so I'm going to pretend like we are and make it reusable.

import { useState } from 'react';
import './Button.css'
import Circle from './components/Circle'
import gsap from 'gsap';

interface Props {
    children: string,
    onClick: Function
}

export default function Button({ children, onClick }: Props) {
    const [activeTagIndex, setActiveTagIndex] = useState<0 | 1>(0)

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
        <div onClick={event => onClick(event)} className="button-component" onMouseOver={swapButtons} onMouseOut={resetButtons}>
            <button id='main-button' className="green400">{children}</button>
            <Circle activeTagIndex={activeTagIndex} />
        </div>
    )
}