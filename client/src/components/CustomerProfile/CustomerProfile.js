import React from 'react'
import OneStarRating from '../OneStarRating/OneStarRating'
import TwoStarRating from '../TwoStarRating/TwoStarRating'
import ThreeStarRating from '../ThreeStarRating/ThreeStarRating'
import FourStarRating from '../FourStarRating/FourStarRating'
import FiveStarRating from '../FiveStarRating/FiveStarRating'

const CustomerProfile = (props) => {
  return (
    <>
    <h1 className='text-center text-xl mt-10 bg-green-400 w-4/5 m-auto rounded'>Success</h1>
      <div className='puff-in-center italic text-center mt-5 p-1 bg-black text-white text-xl w-4/5 m-auto rounded-lg shadow-2xl shadow-green-700'>
        <h1>Name: <span className='font-bold'>{props.data.name}</span></h1>
        <h1>City: <span className='font-bold'>{props.data.city}</span></h1>
        <h1>Cell: <span className='font-bold'>{props.data.cell}</span></h1>
        <h1>Zip Code: <span className='font-bold'>{props.data.zipCode}</span></h1>
        <h1 className='flex justify-center'>Communication:
          {(() => {

            switch (props.data.communicationRating) {

              case 1:
                return (
                  <OneStarRating />
                )
              case 2:
                return (
                  <TwoStarRating />
                )
              case 3:
                return (
                  <ThreeStarRating />
                )
              case 4:
                return (
                  <FourStarRating />
                )
              case 5:
                return (
                  <FiveStarRating />
                )

              default:
                return (
                  null
                )

            }
          })()}
        </h1>
        <h1 className='flex justify-center'>Pickiness: {(() => {

          switch (props.data.picky) {

            case 1:
              return (
                <OneStarRating />
              )
            case 2:
              return (
                <TwoStarRating />
              )
            case 3:
              return (
                <ThreeStarRating />
              )
            case 4:
              return (
                <FourStarRating />
              )
            case 5:
              return (
                <FiveStarRating />
              )

            default:
              return (
                null
              )

          }
        })()}</h1>
        <h1 className='flex justify-center'>Pay on Time: {(() => {
          switch (props.data.payOnTime) {

            case 1:
              return (
                <OneStarRating />
              )
            case 2:
              return (
                <TwoStarRating />
              )
            case 3:
              return (
                <ThreeStarRating />
              )
            case 4:
              return (
                <FourStarRating />
              )
            case 5:
              return (
                <FiveStarRating />
              )

            default:
              return (
                null
              )

          }
        })()}</h1>
      </div>
    </>

  )
}

export default CustomerProfile

// contractor testimonial that has a thumbs up or down