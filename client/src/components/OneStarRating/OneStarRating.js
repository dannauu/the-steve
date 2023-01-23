import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const OneStarRating = () => {
    return (
        <div className='flex items-center pl-2 text-yellow-500'>
            <AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
        </div>
    )
}

export default OneStarRating