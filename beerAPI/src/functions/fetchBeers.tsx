
export interface Beers {
    image_url: string;
    name: string;
    tagline: string;
    contributed_by: string;
}


export async function fetchBeers(): Promise<Beers[]>{
    const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
    const json = (await response.json()) as Beers[];
    return json;
}

