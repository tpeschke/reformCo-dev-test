import './BottomCards.css'
import CardSlide from './components/CardSlide/CardSlide'
import IntroductionCard from './components/IntroductionCard'

export default function BottomCards() {
    return (
        <div className="bottom-cards-component">
            <IntroductionCard />
            <CardSlide />
        </div>
    )
}