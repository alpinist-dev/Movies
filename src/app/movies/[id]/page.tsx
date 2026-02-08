import MovieDetail from "./MovieDetail";

interface Params {
  params: { id: string };
}

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
