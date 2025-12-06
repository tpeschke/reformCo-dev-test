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
            {complaints.map((complaint) => <p key={complaint} className="xs orange">{complaint}</p>)}
        </span>
    )
}