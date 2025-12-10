import './LoadingScreen.css'

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

export default function LoadingScreen() {
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.timeline()
            .to(".loading-header", { duration: 0.5, scale: 1.25, ease: "power1.out" })
            .to(".loading-header", { duration: 0.5, scale: 1, ease: "power1.out" })
            .to(".loading-screen-component", { delay: 1, duration: 1, opacity: 0, ease: "power2.in" })
            .set(".loading-screen-component", { display: 'none' })
    });

    return (
        <div className="loading-screen-component">
            <h1 className='loading-header green200'>H.I.</h1>
        </div>
    )
}