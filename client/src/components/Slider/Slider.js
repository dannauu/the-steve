import { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import OneStarRating from '../OneStarRating/OneStarRating'
import TwoStarRating from '../TwoStarRating/TwoStarRating'
import ThreeStarRating from '../ThreeStarRating/ThreeStarRating'
import FourStarRating from '../FourStarRating/FourStarRating'
import FiveStarRating from '../FiveStarRating/FiveStarRating'
import axios from 'axios'

const Slider = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3001/all-customers');
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
      <Marquee gradient={false} speed={2} >
        <ul className='flex'>
          {data.map(item => (
            <div key={item._id}>
              <div className='border-2 border-black italic text-center mt-5 p-1 bg-gray-300 text-black text-xl m-2 rounded-lg'>
                <h1>Name: <span className='font-bold'>{item.name}</span></h1>
                <h1>City: <span className='font-bold'>{item.city}</span></h1>
                <h1>Cell: <span className='font-bold'>{item.cell}</span></h1>
                <h1>Zip Code: <span className='font-bold'>{item.zipCode}</span></h1>
                <h1 className='flex justify-center'>Communication: <OneStarRating /></h1>
                <h1 className='flex justify-center'>Pickiness: <TwoStarRating /></h1>
                <h1 className='flex justify-center'>Pay on Time: <FiveStarRating /></h1>
                <p className='text-sm'>This customer has been reviewed <span className='font-bold'>46</span> times.</p>
              </div>
            </div>
          ))}
        </ul>
      </Marquee>

  )
}

export default Slider