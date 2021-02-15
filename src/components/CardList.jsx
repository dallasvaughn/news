import React from 'react';
import NewsCard from './NewsCard';

const CardList = ({ articles }) => {
  return (
    <div className="card-list">
      {articles
        ? articles.map((article) => {
            return (
              <NewsCard
                key={article.url}
                author={article.author}
                content={article.content}
                description={article.description}
                title={article.title}
                source={article.source.name}
                image={article.urlToImage}
                url={article.url}
              />
            );
          })
        : null}
    </div>
  );
};

export default CardList;
