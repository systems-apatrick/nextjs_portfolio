import React from "react";

const Contact = () => {
	return (
		<div className='pt-[5rem] pb-[3rem] bg-gray-900'>
			<div className='grid grid-cols1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto'>
				<div>
					<p className='heading__mini'>Get in touch</p>
					<h1 className='heading__primary'>
						lets make yours <span className='text-blue-400'>brand</span>{" "}
						brilliant
					</h1>
					<p className='text-[15px] text-white met.[1rem] opacity-75'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
						aliquid impedit assumenda, libero voluptatem, amet magni odio
						asperiores quo tenetur voluptas ipsam molestias, perferendis
						repudiandae aspernatur pariatur harum cupiditate esse.
					</p>
					<h1 className='mt-[2rem] mb-[2rem] text-[30px] text-blue-300 underline font-bold'>
						+593 967628197
					</h1>
				</div>
				<div>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center'>
						<input
							type='text'
							placeholder='Name'
							className='py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4'
						/>

						<input
							type='email'
							placeholder='Email'
							className='py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4'
						/>
					</div>
					<input
						type='text'
						placeholder='Subject'
						className='py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4'
					/>
					<textarea
						placeholder='Message'
						className='py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4'
						rows={4}
					></textarea>
					<button className='py-[0.7rem]  mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-md px-4'>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
