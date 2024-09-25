import fetchData from "../functions/fetchFunction";
import News from "../interfaces/News";
import NewsCard from "./NewsCard";

interface RenderNewsCardsProps {
    getSearchfor: string;
    getLanguage: string
}

function RenderNewsCards(props: RenderNewsCardsProps){
    const news: News[] = fetchData(props.getSearchfor, props.getLanguage);

    const filteredNews: News[] = news.filter(el => (el.author !== null && el.urlToImage !== null))
    console.log(filteredNews)
    return (
        <div>
            {news.length > 0 ? (
                filteredNews.map((el: News) => (
                    <NewsCard 
                        key={el.url}
                        title={el.title} 
                        urlToImage={el.urlToImage} 
                        description={el.description} 
                        url={el.url}
                        author={el.author}
                    />
                ))
            ) : (
                <div>No news found.</div>
            )}
        </div>
    )

}

export default RenderNewsCards;