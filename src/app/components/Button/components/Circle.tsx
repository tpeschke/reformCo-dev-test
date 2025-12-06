import './Circle.css'
import Image from "next/image";
import arrowGreen400 from "../../../../../public/images/arrow-circle-green-400.svg"

export default function Circle() {
    {/* Note to self: the color of the arrow doesn't change until after its fully behind the button so you can just do a 
        quick swap */}
    return (
        <Image src={arrowGreen400} alt={"id card icon"} />
    )
}