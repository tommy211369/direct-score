// Librairies
import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { dateLiveFormatter } from "../../assets/functions";

// Components
import Loading from "../Loading/Loading";

function Home() {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=fr&category=sports&domains=rmcsport.bfmtv.com,eurosport.fr,footmercato.net,butfootballclub.fr,onzemondial.com,maxifoot.fr,foot01.com,jeunesfooteux.com,lequipe.fr,canal-supporters.com&q=foot&pageSize=100&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );

        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    getNews();
  }, []);

  return (
    <div className="Home">
      {loading ? (
        <Loading />
      ) : (
        <div className="articles">
          <h1>LES DERNIÈRES INFOS FOOT</h1>
          {news.map((article, index) => {
            return (
              <a key={index} href={article.url} target="blank">
                <img src={article.urlToImage} alt="article pic" />
                <div>
                  <p className="source">{article.source.name}</p>
                  <p className="title">{article.title}</p>
                  <p className="author">
                    {article.author ? <span>{article.author} - </span> : null}
                    <span className="date">
                      {dateLiveFormatter(article.publishedAt)}
                    </span>
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
