import React from 'react';

import Header from '../components/Header';
import Students from '../components/Students';
import Form from '../components/Form';
import { useState } from 'react';



const Home = ({count,setCount,name,setName,address,setAddress,phone,setPhone}) => {

   
  
  return (
    <div>
      <Header/>
      <Form count={count} setCount={setCount} name={name} setName={setName} address={address} setAddress={setAddress} phone={phone} setPhone={setPhone}/>
      <Students count={count} setCount={setCount} name={name} setName={setName} address={address} setAddress={setAddress} phone={phone} setPhone={setPhone}  />
    </div>
  )
}

export default Home;