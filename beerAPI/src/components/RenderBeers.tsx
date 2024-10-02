import { Beers, fetchBeers } from "../functions/fetchBeers";
import BeerCard from "./BeerCard";
import { useQuery } from "@tanstack/react-query";

function RenderBeers(){

    const beerQuery = useQuery<Beers[]>({ queryKey: ["beers"],
        queryFn: fetchBeers,
    });

    console.log(beerQuery.data)

    if (beerQuery.isError){ return "Oooopsies" }; 

    if (beerQuery.isLoading){ return "Loading..." }
    
    return <div>
        {beerQuery.data.map((beer: Beers) => { return <BeerCard key={beer.name}
        image_url={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        contributed_by={beer.contributed_by}
        />})}
    </div>
}

export default RenderBeers;