import React from 'react'
import { ImArrowDown } from 'react-icons/im'

const LandingMessage = () => {
  return (
    <div className='text-center p-1'>
        <h1 className='text-xl italic font-bold'>Is that new customer worth your time? Find out below </h1>
        <ImArrowDown className='flex m-auto text-3xl mt-1 text-white'/>
        <ol className='text-sm font-bold'>
          <li>1. Type your customer's  name and hit enter</li>
          <li>2. Check your customer's last four cell digits match</li>
          <li>3. Verify their communication, payment etiquette and more</li>
        </ol>
        {/* <p>There are 32.5 million small business's in the United States. If you are one of those owners I am sure you have came across that one customer that you wish you would of not met, or the customer that is quick to leave you a bad review at any little inconvenience. The steve is here to keep customers accountable for their actions because sometimes the customer isn't always right.</p>
        <p>With The Steve you are able to search your customer by name and verify the type of customer they are based off their communication, how picky or hard they are to deal with and also if they are responsible and handle payment as should.</p> */}
    </div>
  )
}

export default LandingMessage