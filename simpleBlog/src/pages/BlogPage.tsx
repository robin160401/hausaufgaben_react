import { Link } from "react-router-dom";
import HeaderLayout from "../components/HeaderLayout";
import { blogData } from "../data/data";

export default function BlogPage(){

    
    return <>
        <HeaderLayout />
        {blogData.map((article) => <div className="w-2/6">
            <img src={article.img_url} alt=""/>
            <div>{article.title}</div>
            <Link to={article.title}>Read More</Link>
            </div>)}
    </>
}