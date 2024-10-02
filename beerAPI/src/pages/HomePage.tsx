import AllBeersImg from "../assets/img/Group 4.png"
import RandomBeerImg from "../assets/img/Group 5.png"
import { Link } from "react-router-dom"

export default function HomePage(){
    return <div>
        <Link to="/allbeers">
            <img src={AllBeersImg} alt="" />
        </Link>
        <p>Klicke auf das Foto um alle Möglichen Biere angezeigt zu bekommen.</p>
        <Link to="/randombeer">
            <img src={RandomBeerImg} alt="" />
        </Link>
        <p>Hierüber kannst du dir ein Random Bier anzeigen lassen.</p>
    </div>
}