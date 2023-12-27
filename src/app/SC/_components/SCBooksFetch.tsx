import { BookList } from '@/components/BookList';
import { Book } from '@/type';

export const SCBooksFetch = async () => {
  const searchParam = '芥川龍之介';
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchParam}`;
  const res = await fetch(url);
  const data: { items: Book[] } = await res.json();

  return <BookList books={data.items} />;
};
