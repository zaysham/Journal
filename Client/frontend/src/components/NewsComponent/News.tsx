import "./News.css";
import { useEffect } from "react";

interface NewsProps {
  getNews: () => void;
  news: [
    {
      description: string;
      title: string;
      url: string;
    },
    {
      description: string;
      title: string;
      url: string;
    },
    {
      description: string;
      title: string;
      url: string;
    }
  ];
}

export default function News({ getNews, news }: NewsProps) {
  // const handleClick = function () {
  //   getNews();
  // };

  useEffect(() => {
    //runs getNews function once so it displays soon as component mounts
    getNews();
  }, []);

  return (
    <div className="text-center mx-3">
      {/* <button
        id="newsButton"
        className="btn btn-dark mb-2"
        onClick={handleClick}
      >
        Click for today's news
      </button> */}

      <div className="newsContainer rounded">
        <div className="newsTitle mt-2">
          <h3>Today's News</h3>
        </div>

        <div className="news1">
          <h5 className="newsHeaders">
            <a href={news[0].url}>{news[0].title}</a>
          </h5>

          <p>{news[0].description}</p>
        </div>
        <div className="news2">
          <h5 className="newsHeaders">
            <a href={news[1].url}>{news[1].title}</a>
          </h5>
          <p>{news[1].description}</p>
        </div>
        <div className="news3">
          <h5 className="newsHeaders">
            <a href={news[2].url}>{news[2].title}</a>
          </h5>
          <p>{news[2].description}</p>
        </div>
      </div>
    </div>
  );
}
