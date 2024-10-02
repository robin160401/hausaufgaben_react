import { Link } from "react-router-dom";
import { Beers } from "../functions/fetchBeers";

function BeerCard(props: Beers){
    return <div>
        <Link to={`/${props.name}`}>
            <img src={props.image_url} alt="" />
        </Link>
        <div>
            <h2>{props.name}</h2>
            <div>{props.tagline}</div>
            <div>{props.contributed_by}</div>
        </div>
    </div>
}
export default BeerCard;