import { mediaQueryHook } from '@/app/utilities/mediaQueryHook'
import './BottomCards.css'
import CardSlide from './components/CardSlide/CardSlide'
import IntroductionCard from './components/IntroductionCard'

export default function BottomCards() {
    const isTablet = mediaQueryHook(1024)
    const isPhone = mediaQueryHook(500)

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