import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='text-center font-semibold p-8 mt-10 bg-red-600 text-white shadow-2xl shadow-red-700 bounce-top'>
      <h1>Oops... Looks like this customer hasn't been reviewed yet! Double check your spelling or search for a different name.</h1>
    </div>
  )
}

export default LoadingSpinner