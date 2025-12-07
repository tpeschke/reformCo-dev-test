import './Circle.css'
import Image from "next/image";
import arrowGreen400 from "../../../../../public/images/arrows/arrow-circle-green-400.svg"
import arrowGreen200 from "../../../../../public/images/arrows/arrow-circle-green-200.svg"

interface Props {
    activeTagIndex: 0 | 1
}

export default function Circle({ activeTagIndex }: Props) {
    switch (activeTagIndex) {
        case 0:
            return <Image className='circle-arrow-button' src={arrowGreen400} alt={"id card icon"} />
        case 1:
            return <Image className='circle-arrow-button' src={arrowGreen200} alt={"id card icon"} />
        default:
            return <p>Something Went Wrong</p>
    }
}