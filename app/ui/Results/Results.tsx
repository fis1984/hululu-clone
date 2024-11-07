import { Movie, SearchResults } from '@/app/lib/definitions';
import React from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';

type SearchProps = {
	request: SearchResults;
};

const Results: React.FC<SearchProps> = ({ request }) => {
	return (
		request.results && (
			<div className='px-5  my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
				{request.results.map((movie: Movie) => (
					<Thumbnail key={movie.id} movie={movie} />
				))}
			</div>
		)
	);
};

export default Results;
