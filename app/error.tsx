'use client'; // Error boundaries must be Client Components

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const router = useRouter();

	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center justify-center space-x-2'>
			<h2 className='font-bold'>Something was wrong!</h2>
			<p className='text-sm'>Please, try again or contact support.</p>
			<button
				onClick={() => reset()}
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
				Try again
			</button>
			<button
				onClick={() => router.push('/')}
				className='bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'>
				Back Home
			</button>
		</div>
	);
}
