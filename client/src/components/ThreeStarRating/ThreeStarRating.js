import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const ThreeStarRating = () => {
    return (
        <div className='flex items-center pl-2 text-yellow-500'>
            <AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar />
        </div>
    )
}

export default ThreeStarRating