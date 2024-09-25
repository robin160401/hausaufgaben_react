import News from "../interfaces/News";

function NewsCard(props: News){
    return <div>
        <h1>{props.title}</h1>
        <img src={props.urlToImage} alt="" />
        <p>{props.description}</p>
    </div>
}

export default NewsCard;