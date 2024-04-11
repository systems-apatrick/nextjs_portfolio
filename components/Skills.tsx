import React from "react";
import SkillsCard from "./Helper/SkillsCard";

const Skills = () => {
	return (
		<div className='pt-[5rem] pb-[3rem] bg-black '>
			<div className='grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center'>
				<div className='col-span-3'>
					<p className='heading__mini'>My Skill</p>
					<h1 className='heading__primary'>
						Lets explorer <span>Skills</span> && expericience
					</h1>
					<p className='text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem] '>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis non
						error explicabo hic, delectus veniam eligendi illo suscipit
						architecto possimus similique mollitia omnis sunt numquam. Ipsam
						magni necessitatibus placeat quae. Lorem ipsum dolor sit, amet
						consectetur adipisicing.
					</p>
					<button
						className='relative flex h-[50px] w-40 items-center justify-center font-semibold 
							overflow-hidden bg-blue-500 text-white shadow-2x1 transition-all before:absolute before:h-0 before:w-0 
							before:rounded-full before:bg-blue-900 before:duration-500 
							before:ease-out hover:before:h-56 hover:before:w-56'
					>
						<span className='relative z-10'>Learn more</span>
					</button>
				</div>
				<div className='col-span-4'>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-[1rem] items-center'>
						<div>
							<SkillsCard
								title='React'
								image='/images/react.svg'
								percent='90%'
							/>
						</div>
						<div>
							<SkillsCard
								title='CSS'
								image='/images/css.svg'
								percent='80%'
							/>
						</div>
						<div>
							<SkillsCard
								title='Python'
								image='/images/python.svg'
								percent='90%'
							/>
						</div>
						<div>
							<SkillsCard
								title='Javascript'
								image='/images/js.svg'
								percent='90%'
							/>
						</div>
						<div>
							<SkillsCard
								title='TypeScript'
								image='/images/ts.svg'
								percent='90%'
							/>
						</div>

						<div>
							<SkillsCard
								title='Javascript'
								image='/images/js.svg'
								percent='90%'
							/>
						</div>
						<div>
							<SkillsCard
								title='TypeScript'
								image='/images/ts.svg'
								percent='90%'
							/>
						</div>
						<div>
							<SkillsCard
								title='Javascript'
								image='/images/js.svg'
								percent='90%'
							/>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
