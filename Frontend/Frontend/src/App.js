import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import EditPage from './components/EditPage';
import { useState } from 'react';



function App() {

  const [count,setCount]=useState(0);

  const [name,setName]=useState("");
  const [address,setAddress]=useState("");
  const [phone,setPhone]=useState("");


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount} name={name} setName={setName} address={address} setAddress={setAddress} phone={phone} setPhone={setPhone}/>}></Route>
        <Route path="/editpage/:id" element={<EditPage  count={count} setCount={setCount} name={name} setName={setName} address={address} setAddress={setAddress} phone={phone} setPhone={setPhone} />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
