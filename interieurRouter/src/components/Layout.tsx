import { NavLink } from "react-router-dom";
import Logo from "../assets/img/Logo (1).png";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout(props: LayoutProps){
    return <div>
        <header className="flex justify-between mt-5">
            <img src={Logo} alt="Logo" className="ml-20"/>
            <nav>
                <NavLink to ="/" className="mx-5">Home</NavLink>
                <NavLink to ="/about" className="mx-5">About Us</NavLink>
                <NavLink to ="/products" className="mx-5 mr-20">Products</NavLink>
            </nav>
        </header>
        <main>
            {props.children}
        </main>
    </div>
}