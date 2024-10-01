import { useParams } from "react-router-dom";
import Cars from "../data/cars.json";

function getCar(brand: string){
    return Cars.find((car) => car.CarMake.toUpperCase() === brand.toUpperCase())
}

export default function CarPage(){
    const {car} = useParams();


    const carCard = getCar(car!);

    if (!carCard) {
        return "Ooopsies"
    }

    return <>
        <h2>{carCard.CarMake}</h2>
        <h3>{carCard.carModel}</h3>
        <h4>{carCard.CarYear}</h4>
    </>
}