import { CalendarIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
interface Props {
	image: string;
	title: string;
	comment: string;
	date: string;
}
const BlogCard = ({ comment, title, image, date }: Props) => {
	return (
		<div className='bg-gray-900'>
			<div>
				<Image
					src={`${image}`}
					alt='blog'
					width={300}
					height={300}
					className='object-cover w-[100%] h-[100%]'
				></Image>
			</div>
			<div className='p-4'>
				<div className='mt-[1rem] mb-[1rem] px-3 py-1 bg-gray-800 w-fit flex items-center space-x-2 rounded-lg'>
					<CalendarIcon className='w-[1rem] h-[1rem] text-blue-400' />
					<p className='text-white text-[14px] opacity-85'></p>
				</div>
				<h1 className='text-[20px] opacity-85 hover:text-blue-400 transition-all duration-20 cursor-pointer text-white font-semibold underline'>
					{title}
				</h1>
				<div className="flex items-center mt-[2rem] justify-between">
					<div className="flex items-center space-x-3">
						<ChatBubbleLeftRightIcon className="w-[1.2rem] h-[1.2rem] text-blue-400"/>
						<p className="text-[15px] text-white opacity-85">{comment} comments</p>
					</div>
					<button className="text-[15px] hover:text-blue-500 transition-all duration-150 text-white font-semibold underline">
						Read more++
					</button>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
