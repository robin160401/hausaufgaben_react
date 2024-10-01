import { Link } from "react-router-dom";

interface ReadMoreCarCardProps{
    model: string;
}

export default function RedMoreCarCard(props: ReadMoreCarCardProps){
    return <div>
        <h2>{props.model}</h2>
        <Link to={`${props.model}`}>Read More</Link>
    </div>
}