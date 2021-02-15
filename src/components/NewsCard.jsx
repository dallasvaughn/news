import React from 'react';

const NewsCard = ({ author, description, title, image, source, url }) => {
  return (
    <div className="news-card">
      <img src={image} alt="news" className="news-card__image" />
      <div className="text">
        <h2 className="news-card__title">{title}</h2>
        <p className="news-card__author">By {author}</p>
        <p className="news-card__source">Source: {source}</p>
        <h4 className="news-card__content">{description}</h4>
        <a className="news-card__link" href={url}>
          Read original
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
