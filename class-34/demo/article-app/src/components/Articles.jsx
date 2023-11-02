import { useState, useEffect, useContext } from 'react';
import { LoginContext } from '../auth/Context';
import axios from 'axios';

const SERVER_URL = import.meta.env.SERVER_URL || 'http://localhost:3001';

function Articles() {
  const [articleList, setArticleList] = useState([]);
  const context = useContext(LoginContext);

  useEffect(() => {
    console.log(context);
    const config = {
      method: 'get',
      url: SERVER_URL + '/article',
      headers: {Authorization: `bearer ${context.token}`}
    }

    axios(config).then(response => {
      setArticleList(response.data);
    });
  }, []);

  return (
    <div id="article-container">
      {articleList.map((article, key) => {
        return (
          <p key={key}>{article.name}</p>
        )
      })}
    </div>
  )
}

export default Articles;