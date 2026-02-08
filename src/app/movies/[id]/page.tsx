// 1. Redefine Params as a Promise of an object
type Params = Promise<{ id: string }>;

// 2. Pass it into the function via an interface that matches Next.js expectation
interface MoviePageProps {
  params: Params;
}

<<<<<<< HEAD
// 1. Ensure Params matches the Next.js 15 Promise structure
type Params = Promise<{ id: string }>;

// 2. Make the function async
export default async function MoviePage(props: { params: Params }) {
  // 3. Await the params
  const resolvedParams = await props.params;
  
  // 4. Now you can safely use .id
  const movieId = parseInt(resolvedParams.id, 10);

  return <MovieDetail movieId={movieId} />;
}
=======
export default async function MoviePage({ params }: MoviePageProps) {
  // 3. Await the promise to get the actual ID
  const resolvedParams = await params;
  const movieId = parseInt(resolvedParams.id, 10);

  return <MovieDetail movieId={movieId} />;
}

// 4. Remember to include this for GitHub Pages static export
export async function generateStaticParams() {
  // Replace with your actual movie data source
  return [{ id: '1' }, { id: '2' }]; 
}
>>>>>>> f3b68494e9b489f9ccc888c02661554d982cc22a
