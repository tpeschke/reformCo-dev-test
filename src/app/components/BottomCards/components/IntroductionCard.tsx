'use client'

import Button from "../../Button/Button";

export default function IntroductionCard() {

    return (
        <div className="introduction-card-component card flex-column-separate">
            <p className="green400">Join hundreds of businesses who trust us to offer health insurance that works the way it should: affordable coverage that puts employees and their doctors in the driving seat.</p>
            <Button>Get a Custom Quote Today</Button>
        </div>
    )
}