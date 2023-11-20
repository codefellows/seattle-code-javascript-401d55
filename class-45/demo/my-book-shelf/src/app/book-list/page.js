"use client"

import { useEffect, useState } from 'react';

export default function BookList() {

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch('/book-list/api')
      .then(res => res.json())
      .then(json => {
        console.log('JSON RESPOSNE: ', json);
        setBookList(json.data);
      })
  }, []);

  return (
    <div>
      {bookList.map((book, key) => {
        return <h2 key={key}>{book.title}</h2>
      })}
    </div>
  )
}