import { useEffect, useState } from "react"
import { Beers, fetchBeers } from "../functions/fetchBeers";
import BeerCard from "./BeerCard";

function RenderBeers(){
    const [beers, setBeers] = useState<Beers[]>([])


    useEffect(() => {
        // (async () => {
        //     setBeers(await fetchBeers());         Iife
        // })()

        fetchBeers().then(setBeers)

    }, [])
    
    return <div>
        {beers.map((beer: Beers) => (<BeerCard key={beer.name} image_url={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        contributed_by={beer.contributed_by}
        />))}
    </div>
}

export default RenderBeers;