// 1. Redefine Params as a Promise of an object
type Params = Promise<{ id: string }>;

// 2. Pass it into the function via an interface that matches Next.js expectation
interface MoviePageProps {
  params: Params;
}

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
