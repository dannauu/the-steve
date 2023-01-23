import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const FourStarRating = () => {
    return (
        <div className='flex items-center pl-2 text-yellow-500'>
            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
        </div>
    )
}

export default FourStarRating