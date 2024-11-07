import Image from 'next/image';
import { Movie } from '@/app/lib/definitions';
import React, { ReactNode } from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';

function Thumbnail({ movie }: { movie: Movie }): ReactNode {
	console.log(process.env.BASE_URL_IMAGE);
	return (
		<div className='group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
			<Image
				layout='responsive'
				src={`${process.env.BASE_URL_IMAGE}${
					movie.backdrop_path || movie.poster_path
				}`}
				alt={movie.original_title}
				width={100}
				height={200}
			/>
			<div className='p-2'>
				<p className='truncate max-w-md'>{movie.overview}</p>
				<h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
					{movie.title || movie.original_title}
				</h2>
				<p className='flex items-center opacity-0 group-hover:opacity-100'>
					{movie.release_date} · {''}
					<HandThumbUpIcon className='h-5 mx-2' /> {movie.vote_count}
				</p>
			</div>
		</div>
	);
}

export default Thumbnail;
