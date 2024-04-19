import React from "react";
import BlogCard from "./Helper/BlogCard";

const Blog = () => {
	return (
		<div className='pt-[5rem] pb-[3rem] bg-black'>
			<div className='text-center'>
				<p className='heading__mini'>My Blog</p>
				<h1 className='heading__primary'>
					My latest<span className='text-blue-300'>Blog</span> and News
				</h1>
			</div>
			<div className='w-[80%] mx-auto pt-[3rem] md:pt-[5rem] grid grid-cols-1 md:grid:cols.2 lg:grid-cols-3 items-center gap-[2rem]'>
				<div>
					<BlogCard
						title='docker in mode rootless'
						comment='4'
						date='24 january 2023'
						image='/images/b1.jpg'
					/>
				</div>
			</div>
		</div>
	);
};

export default Blog;
