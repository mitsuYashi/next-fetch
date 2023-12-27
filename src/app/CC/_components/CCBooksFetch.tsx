'use client';
import { BookList } from '@/components/BookList';
import { Book } from '@/type';
import { useEffect, useState } from 'react';

export const CCBooksFetch = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const bookFetch = async () => {
    try {
      const searchParam = '芥川龍之介';
      const url = `https://www.googleapis.com/books/v1/volumes?q=${searchParam}`;
      const res = await fetch(url);
      const data = await res.json();
      setBooks(data.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    bookFetch();
  }, []);

  if (books == null) return <div>loading...</div>;

  return <BookList books={books} />;
};
