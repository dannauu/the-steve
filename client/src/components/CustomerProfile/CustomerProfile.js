import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const CustomerProfile = (props) => {
  return (
    <div className='text-center pt-10'>
      <h1>Name: <span className='font-bold'>{props.data.name}</span></h1>
      <h1>City: <span className='font-bold'>{props.data.city}</span></h1>
      <h1>Cell: <span className='font-bold'>{props.data.cell}</span></h1>
      <h1>Zip Code: <span className='font-bold'>{props.data.zipCode}</span></h1>
      <h1>Communication Rating: <span className='font-bold'>{props.data.communicationRating}</span></h1>
      <h1>Pickiness: <span className='font-bold'>{props.data.picky}</span></h1>
      <h1>Pay on Time: <span className='font-bold'>{props.data.payOnTime}</span></h1>
    </div>
  )
}

export default CustomerProfile