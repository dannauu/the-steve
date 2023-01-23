import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const FiveStarRating = () => {
    return (
        <div className='flex items-center pl-2 text-yellow-500'>
            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
        </div>
    )
}

export default FiveStarRating