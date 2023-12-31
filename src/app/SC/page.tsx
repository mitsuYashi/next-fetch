import { SCBooksFetch } from './_components/SCBooksFetch';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SCBooksFetch />
    </Suspense>
  );
}
