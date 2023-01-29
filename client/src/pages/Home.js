import React from 'react'
import LandingMessage from '../components/LandingMessage/LandingMessage';
import SearchBar from '../components/SearchBar/SearchBar';
// import InputForm from '../components/InputForm/InputForm';

const Home = () => {
  return (
    <>
      <SearchBar />
      <LandingMessage />
      {/* <InputForm /> */}
    </>
  )
}

export default Home