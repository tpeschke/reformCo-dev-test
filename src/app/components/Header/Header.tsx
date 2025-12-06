import './Header.css'
import Marquee from "./components/Marquee"

export default function Header() {
    return (
        <div className="header-component green500 flex-center">
            <h1>
                Health insurance that 
                <em> doesn't get in </em>
                <Marquee />
                <em> the way.</em>
            </h1>
        </div>
    )
}