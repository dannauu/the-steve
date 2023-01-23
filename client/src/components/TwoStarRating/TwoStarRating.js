import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const TwoStarRating = () => {
    return (
        <div className='flex items-center pl-2 text-yellow-500'>
            <AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
        </div>
    )
}

export default TwoStarRating