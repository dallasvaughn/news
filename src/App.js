import React, { useState, useEffect } from 'react';
import './dist/styles.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import CardList from './components/CardList';
import Chart from './components/Chart';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchParam, setSearchParam] = useState('');
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    if (searchParam.length > 0) {
      getNews();
    }
  }, [searchParam]);

  const handleInputValueChange = (newValue) => {
    setInputValue(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchParam(inputValue);
  };

  const getNews = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${searchParam}&pageSize=20&apiKey=${process.env.REACT_APP_KEY}`
    );
    const { articles } = res.data;
    setArticleList(articles);
  };

  return (
    <div>
      <SearchForm
        inputValue={inputValue}
        onInputValueChange={handleInputValueChange}
        handleSubmit={handleSubmit}
      />
      <div className="wrapper">
        <Chart articles={articleList} />
        <CardList articles={articleList} />
      </div>
    </div>
  );
};

export default App;
