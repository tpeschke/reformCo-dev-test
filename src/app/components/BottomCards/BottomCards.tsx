'use client'

import './BottomCards.css'
import CardSlide from './components/CardSlide/CardSlide'
import IntroductionCard from './components/IntroductionCard'
import { mediaQueryHook } from '@/app/utilities/mediaQueryHook';

export default function BottomCards() {
    const isTablet = mediaQueryHook(1024)
    // Technically, the phone layout doesn't start until width 375px but, after 945, the scaled up cards start overflowing the sides
    // so it made sense to change the orientation early to create a smooth experience.
    const isPhone = mediaQueryHook(945)

    const cardSlideShouldBeVertical = isTablet && !isPhone

    return (
        <div className="bottom-cards-component">
            <IntroductionCard />
            {/* 
                The way that the timeline on the CardSlide is set up, changing between tablet and desktop causes an issue with the 
                animation so that the cards go in two wrong directions at the same time. Simply rerendering when isTablet is 
                updated doesn't work due to how the animation is set up so move is to only show the one that is applicable to the view 
                the user is in.
                I checked the active memory of the tab and it's a negligible increase at this point.
            */}
            {cardSlideShouldBeVertical && <CardSlide isTablet={true} />}
            {!cardSlideShouldBeVertical && <CardSlide isTablet={false} />}
        </div>
    )
}