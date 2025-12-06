import './Header.css'
import Marquee from "./components/Marquee"

export default function Header() {
    const part1 = "Health insurance that".split(' ')
    const part2 = "doesn't get in".split(' ')
    const part3 = "the way.".split(' ')
    return (
        <div className="header-component green500 flex-center flex-wrap">
            {part1.map((part, index) => <h1 key={index}>{part}</h1>)}
            {part2.map((part, index) => <h1 key={index} className='turn-green-placeholder'>{part}</h1>)}
            <Marquee />
            {part3.map((part, index) => <h1 key={index} className='turn-green-placeholder'>{part}</h1>)}
        </div>
    )
}