'use client'

import Button from "../../Button/Button";

export default function IntroductionCard() {

    const getQuote = () => {
        alert("Your Quote: $1,000,000 for of 6 discounted band-aids a year.")
    }

    return (
        <div className="introduction-card-component card flex-column-separate">
            <p className="l green400">Join hundreds of businesses who trust us to offer health insurance that works the way it should: affordable coverage that puts employees and their doctors in the driving seat.</p>
            <Button onClick={getQuote}>Get a Custom Quote Today</Button>
        </div>
    )
}