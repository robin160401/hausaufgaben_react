import { useParams } from "react-router-dom";
import { BlogPost } from "../data/data";
import { blogData } from "../data/data";
import HeaderLayout from "../components/HeaderLayout";

function getArticle(title: string){
    return blogData.find((article) => article.title === title)
}

export default function ArticlePage(){

    const {article} = useParams();

    const blogPost = getArticle(article!);

    if (!blogPost) {
        return "Ooooopsies"
    }

    return <div>
        <HeaderLayout />
        <img src={blogPost.img_url} alt="" />
        <div className="flex justify-between"><h2>{blogPost.title}</h2><div>{blogPost.published_date}</div></div>
        <div>{blogPost.description}</div>
        <div>by {blogPost.author}</div>
        </div>
}