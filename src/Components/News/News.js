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
          `http://api.mediastack.com/v1/news?access_key=2d4a2c9411b719918b2a6452b68edb61&categories=sports&countries=fr&languages=fr`
        );

        // console.log(response.data);
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
