import { useState } from "react";

interface SpoilerProps{
    children: React.ReactNode;
}

function Spoiler(props: SpoilerProps){
    const [showSpoiler, setShowSpoiler] = useState(true)
    const rotateDegree = Math.floor(Math.random() * 20);

    function handleTextClick(){
        setShowSpoiler(false);
    }

    const buttonClass = showSpoiler? `bg-black` : "";
    const buttonStyle = showSpoiler ? { transform: `rotate(${rotateDegree}deg)` } : {};

    return <button onClick={handleTextClick} className={buttonClass} style={buttonStyle}><div>{props.children}</div></button>
}

export default Spoiler;