import { Book } from '@/type';
import Image from 'next/image';

type Props = {
  books: Book[];
};

export const BookList = ({ books }: Props) => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Books</h1>
      {books.map((book: any) => {
        return (
          <div
            key={book.id}
            style={{
              marginBottom: 20,
              padding: 10,
              border: '1px solid #ddd',
              borderRadius: 4,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <h2>{book.volumeInfo.title}</h2>
                <p style={{ fontSize: 16, color: '#666' }}>
                  {book.volumeInfo.authors}
                </p>
                <p style={{ color: '#444', margin: 16 }}>
                  {book.volumeInfo.description}
                </p>
              </div>

              {book.volumeInfo.imageLinks?.thumbnail && (
                <Image
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  width={300}
                  height={595}
                  style={{
                    objectFit: 'contain',
                    // maxWidth: '100%',
                    width: 300,
                    height: 300,
                  }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
