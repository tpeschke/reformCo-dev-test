'use client'

import { useEffect, useState } from 'react';
import './Button.css'
import Circle from './components/Circle'
import gsap from 'gsap';

export default function Button() {
    const [activeTagIndex, setActiveTagIndex] = useState<0 | 1>(0)

    const ease = "power3.in"

    const swapButtons = () => {
        setActiveTagIndex(1)
        gsap.to(".circle-arrow-button", { x: -233, ease })
        gsap.to("#main-button", { x: 58, color: '#00B684', border: '1px solid #00B684', ease })
    }

    const resetButtons = () => {
        setActiveTagIndex(0)
        gsap.to(".circle-arrow-button", { x: 0, ease })
        gsap.to("#main-button", { x: 0, color: '#30715D', border: '1px solid #30715D', ease })
    }

    return (
        <div onClick={_ => alert("Your Quote: $1,000,000 for of 6 discounted band-aids a year.")} className="button-component" onMouseOver={swapButtons} onMouseOut={resetButtons}>
            <button id='main-button' className="green400">Get a Custom Quote Today</button>
            <Circle activeTagIndex={activeTagIndex} />
        </div>
    )
}