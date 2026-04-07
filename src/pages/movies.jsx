import Collections from "../sections/Collections"
import MoviesBanner from "../sections/MoviesBanner"

export const metadata = {
	title: 'Movies & Shows'
}

export default function () {
  return (
    <>
      <MoviesBanner />
      <Collections />
    </>
  )
}
