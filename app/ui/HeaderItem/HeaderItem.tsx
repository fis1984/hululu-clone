import React from 'react';

interface HeaderItemProps {
	title: string;
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ title, Icon }) => {
	return (
		<div className='flex flex-col items-center cursor-pointer group w-20 md:w-12 5 hover:text-white'>
			<Icon className='h-8 mb-1 group-hover:animate-bounce' />
			<p className='opacity-0 group-hover:opacity-100 hidden md:inline tracking-wider'>
				{title}
			</p>
		</div>
	);
};

export default HeaderItem;
