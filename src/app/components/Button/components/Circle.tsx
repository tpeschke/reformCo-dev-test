'use client'

import './Circle.css'
import Image from "next/image";
import arrowCircleGreen400 from "../../../../../public/images/arrows/arrow-circle-green-400.svg"
import arrowCircleGreen200 from "../../../../../public/images/arrows/arrow-circle-green-200.svg"
import arrowGreen400 from "../../../../../public/images/arrows/arrow-green-400.svg"
import arrowGreen200 from "../../../../../public/images/arrows/arrow-green-200.svg"

interface Props {
    activeTagIndex: 0 | 1
}

export default function Circle({ activeTagIndex }: Props) {
    switch (activeTagIndex) {
        case 0:
            return (
                <div className='circle-arrow-button'>
                    <Image className='outer-circle' src={arrowCircleGreen400} alt={"green partial circle around arrow"} />
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
                    <Image className='outer-circle' src={arrowCircleGreen200} alt={"green partial circle around arrow"} />
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