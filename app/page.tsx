import { SearchResults } from './lib/definitions';
import apiConfig from './lib/utils';
import Header from './ui/Header/Header';
import Nav from './ui/Nav/Nav';
import Results from './ui/Results/Results';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
export default async function Home(props: { searchParams: SearchParams }) {
	const searchParams = await props.searchParams;
	const genres: string | undefined | string[] = searchParams.genres;
	let movies = {} as SearchResults;

	if (genres) {
		movies = await fetchMovies(genres as GenreKey);
		// console.log(movies);
	}

	if (!movies) {
		throw new Error('No se existen películas de esta categoría.');
	}

	return (
		movies && (
			<div>
				<Header />
				<Nav />
				<Results request={movies} />
			</div>
		)
	);
}

type GenreKey = keyof typeof apiConfig;

async function fetchMovies(genres: GenreKey) {
	const response = await fetch(
		`${process.env.API_URL}${apiConfig[genres]?.url} || ${process.env.API_URL}
		${apiConfig.fetchTrending.url}`
	);
	return await response.json();
}
