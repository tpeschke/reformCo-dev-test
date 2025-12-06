import './Button.css'
import Circle from './components/Circle'

export default function Button() {
    return (
        <div className="button-component">
            <button className="green400">Get a Custom Quote Today</button>
            <Circle />
        </div>
    )
}