import MovieDetail from "./MovieDetail"; // Adjust path if needed

type Params = Promise<{ id: string }>;

interface MoviePageProps {
  params: Params;
}

export default async function MoviePage({ params }: MoviePageProps) {
  const resolvedParams = await params;
  const movieId = parseInt(resolvedParams.id, 10);

  return <MovieDetail movieId={movieId} />;
}

// Required for GitHub Pages (Static Export)
export async function generateStaticParams() {
  // Return an array of IDs you want to pre-render
  return [{ id: "1" }, { id: "2" }]; 
}