import { useState } from "react";
import axios from 'axios';


function Form({count,setCount,name,setName,address,setAddress,phone,setPhone})
{
    

    

    const [formData,setFormData]=useState({
        name:'',
        address:'',
        phone:''
    })


    const handleName=(event)=>
    {
        setName(event.target.value);


    }

    const handleAddress=(event)=>
    {
       setAddress(event.target.value);

    }

    const handlePhone=(event)=>
    {
      setPhone(event.target.value);

    }

     
    async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://127.0.0.1:8000/api/create",
        {
        
          name: name,
          address: address,
          phone: phone
        
        });
        console.log("stuedtnt inserted succesfully");
          setName("");
          setAddress("");
          setPhone("");
          setCount(count+1);
         
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }

    return (
        <div className="container mt-3">
            <form onSubmit={handleSubmit}>
                <div className="row m-3">
                <div className="col-2">
                <label className="lead">
                Name:
                </label>
                </div>
                <div className="col-10">
                <input className="form-control" type="text" value={name}  onChange={handleName} placeholder="Enter your name"></input> 
                </div>
                </div>

                <div className="row m-3">
                <div className="col-2">
                <label className="lead">
                Address:
                </label>
                </div>
                <div className="col-10">
                <input className="form-control" type="text" value={address}  onChange={handleAddress} placeholder="Enter your address"></input> 
                </div>
                </div>

                <div className="row m-3">
                <div className="col-2">
                <label className="lead">
                Phone:
                </label>
                </div>
                <div className="col-10">
                <input className="form-control" type="text" value={phone}  onChange={handlePhone} placeholder="Enter your mobile"></input> 
                </div>

                </div>
                <div className="text-start m-3">

                <input type="submit" className="btn btn-primary " value="Register"></input> 

                </div>
                
            </form>
        </div>
    );
}

export default Form;