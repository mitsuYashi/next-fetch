'use client';
import { BookList } from '@/components/BookList';
import { Book } from '@/type';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const SwrBooksFetch = () => {
  const searchParam = '芥川龍之介';
  const { data, error, isLoading } = useSWR<{ items: Book[] }>(
    `https://www.googleapis.com/books/v1/volumes?q=${searchParam}`,
    fetcher,
  );

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  if (data == null) return <div>data is null...</div>;

  return <BookList books={data.items} />;
};
