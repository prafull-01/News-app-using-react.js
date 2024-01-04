/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

function Home({category}) {
  let [news, SetNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7a83e2a7e4344e8999b5111038d4b59c`
      )
      .then((resp) => SetNews(resp.data.articles));
  }, [category]);

  return (
    <>
      <div>
        <h2 className="text-center">
          Latest <span className="badge bg-danger">News</span>
        </h2>
      </div>
      <div style={{ display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
        {news.map((item, index) => {
          return (
            <>
              <NewsCard
                key={index}
                title={item.title}
                description={item.description}
                url={item.url}
                src={item.urlToImage}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Home;

// 7a83e2a7e4344e8999b5111038d4b59c
