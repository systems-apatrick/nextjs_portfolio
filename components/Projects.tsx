import React from "react";
import ProjectCard from "./Helper/ProjectCard";

const Projects = () => {
	return (
		<div className='pt-[5rem] pb-[3rem] bg-gray-900'>
			<div className='text-center'>
				<p className='heading__mini'>Recent Works</p>
				<h1 className='heading__primary'>
					My Best <span className='text-blue-300'>Projects</span>
				</h1>
			</div>
			<ProjectCard
				title='Eccommerce Website'
				tech1='react'
				tech2='Next JS'
				tech3='Tailwind'
				tech4='Typescript'
				image='/images/p1.png'
			/>
			<ProjectCard
				title='Eccommerce Website'
				tech1='react'
				tech2='Next JS'
				tech3='Tailwind'
				tech4='Typescript'
				image='/images/p2.png'
			/>
			<ProjectCard
				title='Eccommerce Website'
				tech1='react'
				tech2='Next JS'
				tech3='Tailwind'
				tech4='Typescript'
				image='/images/p3.png'
			/>
			<ProjectCard
				title='Eccommerce Website'
				tech1='react'
				tech2='Next JS'
				tech3='Tailwind'
				tech4='Typescript'
				image='/images/p4.png'
			/>
		</div>
	);
};

export default Projects;
