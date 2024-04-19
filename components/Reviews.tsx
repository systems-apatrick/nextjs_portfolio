import React from 'react'
import ReviewCard from './Helper/ReviewSlider'
import ReviewSlider from './Helper/ReviewSlider'

const Reviews = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
        <div className='text-center'>
            <div className='heading__mini'>Clients Reviews</div>
            <h1 className='heading__primary'>I've <span className='text-blue-300'>20+</span> clients Feedback</h1>
        </div>
        <div className='w-[80%] pt-[3rem] md:pt-[5rem] mx-auto'>
            <ReviewSlider/>
        </div>
    </div>
  )
}

export default Reviews