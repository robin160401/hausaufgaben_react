import { useQuery } from "@tanstack/react-query";
import { Beers, fetchBeers } from "../functions/fetchBeers";
import { Link, useParams } from "react-router-dom";

export default function BeerDetailsPage(){
    const {name} = useParams();

    const beerQuery = useQuery<Beers[]>({ queryKey: ["beers"],
        queryFn: () => fetchBeers()
    });

    if (beerQuery.isError){ return "Oooopsies" }; 

    if (beerQuery.isLoading){ return "Loading..." }

    const beer = beerQuery.data.find((el) => el.name === name);

    if(!beer){
        return "oooopsies"
    }

    return <div>
        <img src={beer.image_url} alt="" />
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <Link to="/allbeers"><button>back</button></Link>
    </div>
}