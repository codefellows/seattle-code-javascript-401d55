import React from 'react';

const Article = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <section>
      <h1>{pageContext.title}</h1>
      <p>{pageContext.text}</p>
    </section>
  )
}

export default Article;