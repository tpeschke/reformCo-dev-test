import './Marquee.css'
import Image from "next/image";
import idCardIcon from '../../../../../public/images/id-card-icon.svg'
import { Fragment } from "react/jsx-runtime";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import horizontalLoop from '@/app/utilities/horizontalLoop';
import { mediaQueryHook } from '@/app/utilities/mediaQueryHook';

interface Props {
    isPhone: boolean
}

export default function Marquee({ isPhone }: Props) {
    const isTablet = mediaQueryHook(1024)
    const isBeyondDesktop = mediaQueryHook(1441)

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

        const finalMargin = getFinalMargin(isPhone, isTablet, isBeyondDesktop)
        gsap.timeline()
            .to(".marquee-component", { delay: 4.5, duration: 2.6, width: 0, height: 0, margin: finalMargin, ease: "expo.in" })
            .to(".marquee-shell", { duration: 2, height: 0, margin: finalMargin, ease: "expo.in" }, "-=2")
            .to(".marquee-shell", { duration: 1, opacity: 0, ease: "expo.in" })
    }, [isPhone]);

    return (
        <div className='marquee-shell'>
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
        </div>
    )
}

function getFinalMargin(isPhone: Boolean, isTablet: Boolean, isBeyondDesktop: Boolean) {
    if (isPhone) {
        return '-23vw'
    } else if (isTablet) {
        return '-16vw'
    } else if (isBeyondDesktop) {
        return '-25px'
    } else {
        return '-1.7vw'
    }
}