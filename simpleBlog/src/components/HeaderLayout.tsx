import { NavLink } from "react-router-dom"

export default function HeaderLayout(){
    return <div>
        <header className="flex justify-between">
            <div>My Life</div>
            <nav className="">
                <NavLink className="p-5 text-red-300" to="/">Home</NavLink>
                <NavLink className="p-5 text-red-300" to="blog">Blog</NavLink>
            </nav>
        </header>
    </div>
}