import Image from "next/image";
import idCardIcon from '../../../../../public/images/id-card-icon.svg'
import { Fragment } from "react/jsx-runtime";

export default function Marquee() {
    const complaints = [
        "unpredictable rate increases",
        "lack of transparency",
        "implementation headaches",
        "claim denials",
        "frustrated users"
    ]

    return (
        <span className="marquee-component green100-border">
            {complaints.map((complaint) => {
                return (
                    <Fragment key={complaint}>
                        <p className="title orange">{complaint}</p>
                        <Image src={idCardIcon} alt={""} />
                    </Fragment>
                )
            })}
        </span>
    )
}