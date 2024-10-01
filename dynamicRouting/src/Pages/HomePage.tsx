import Cars from "../data/cars.json";
import RedMoreCarCard from "../components/ReadMoreCarCard";
import { useParams } from "react-router-dom";

export default function HomePage(){
    const arrayOfCars = Cars;

    return <div>{arrayOfCars.map((car) => {
        return <RedMoreCarCard  model={car.CarMake}/>
    })}</div>
}