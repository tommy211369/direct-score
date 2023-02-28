// Librairies
import { useState, useEffect } from "react";
import "./News.css";
import axios from "axios";
import { dateLiveFormatter } from "../../assets/functions";
import stadium from "../../assets/img/stadium.jpeg";
import Lottie from "lottie-react";
import footballAnimation from "../../assets/img/directscore-loading-lottie.json";

function News() {
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
    <div className="News">
      {loading ? (
        <div className="news-message">
          <Lottie animationData={footballAnimation} />
          <p>
            Les informations sur cette page d'accueil ne sont disponibles pour
            le moment qu'en mode Développement.
          </p>
          <p>Elle seront disponibles ici ultérieurement.</p>
        </div>
      ) : (
        <div className="articles">
          <h1>LES DERNIÈRES INFOS FOOT</h1>
          {news.map((article, index) => {
            return (
              <a key={index} href={article.url} target="blank">
                {article.urlToImage ? (
                  <img src={article.urlToImage} alt="article pic" />
                ) : (
                  <img src={stadium} alt="stadium pic" />
                )}

                <div>
                  <p className="source">
                    {" "}
                    {article.author ? article.author : null}
                  </p>
                  <p className="title">{article.title}</p>
                  <p className="author">
                    {dateLiveFormatter(article.publishedAt)}
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

export default News;
