import "./News.css";

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
  const handleClick = function () {
    getNews();
  };

  return (
    <div className="p-3">
      <button onClick={handleClick}>Click for News</button>
      {news[0].title && (
        <div className="newsContainer rounded">
          <div className="news1">
            <h5>
              <a href={news[0].url}>{news[0].title}</a>
            </h5>

            <p>Description: {news[0].description}</p>
          </div>
          <div className="news2">
            <h5>
              <a href={news[1].url}>{news[1].title}</a>
            </h5>
            <p>Description: {news[1].description}</p>
          </div>
          <div className="news3">
            <h5>
              <a href={news[2].url}>{news[2].title}</a>
            </h5>
            <p>Description: {news[2].description}</p>
          </div>
        </div>
      )}
      {/* <div className="newsContainer rounded ms-auto p-3">
        <h5 className="mb-5">Title: News Title 1</h5>

        <h5 className="">Title: News Title 2</h5>

        <h5 className="mt-5">Title: News Title 3</h5>
      </div> */}
    </div>
  );
}
