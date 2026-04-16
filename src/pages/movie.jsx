import MovieBanner from "../sections/MovieBanner"
import MovieDetails from "../sections/MovieDetails"

export const metadata = {
	title: 'Movie - Requem for a Dream'
}

export default function () {
  return (
    <>
			<MovieBanner/>
      <MovieDetails/>
    </>
  )
}
