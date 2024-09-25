import { useEffect, useState } from "react";
import News from "../interfaces/News";

function fetchData(searchFor: string, language: string):News[] {
    const [news, setNews] = useState<News[]>([]);

    useEffect(()=> {
        fetch("https://newsapi.org/v2/everything?" +
          `q=${searchFor}&` +
          "sortBy=popularity&" +
          `language=${language}&`+
          "apiKey=09f0a3c063a24b5285bdaa250e9af975")
          .then((response) => response.json())
          .then((json) => {
            setNews(json.articles);
          })
    }, [])
    return news;
}

export default fetchData;