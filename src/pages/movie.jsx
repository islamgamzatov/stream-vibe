import MovieBanner from "../sections/MovieBanner"
import MovieDetails from "../sections/MovieDetails"

export const metadata = {
	title: 'Movie - Fight Club'
}

export default function () {
  return (
    <>
			<MovieBanner/>
      <MovieDetails/>
    </>
  )
}
