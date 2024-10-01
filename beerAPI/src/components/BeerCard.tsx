import { Beers } from "../functions/fetchBeers";

function BeerCard(props: Beers){
    return <div>
        <img src={props.image_url} alt="" />
        <div>
            <h2>{props.name}</h2>
            <div>{props.tagline}</div>
            <div>{props.contributed_by}</div>
        </div>
    </div>
}
export default BeerCard;