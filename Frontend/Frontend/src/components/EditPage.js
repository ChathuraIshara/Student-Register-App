import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



function EditPage({count,setCount})
{

  const navigate=useNavigate();
  const location=useLocation();

   const loc=location.state;
  

    

    const { id } = useParams(); // Access the 'id' parameter from the URL

    

    const [name,setName]=useState(loc.name);
    const [address,setAddress]=useState(loc.address);
    const [phone,setPhone]=useState(loc.phone);
    const [userid,setId]=useState(id);

  


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

    async function update(event)
    {
     event.preventDefault();
 
    try
        {
         
            await axios.put(`http://127.0.0.1:8000/api/update/${userid}`,
        {
         
          id:userid,
          name: name,
          address: address,
          phone: phone
        
        });
         // alert("Registation Updateddddd");
          setName("");
          setAddress("");
          setPhone("");
          navigate('/');
         

         
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }






    return <div>
        <div className="container">
            <h1 className="text-center display-3">Update Details</h1>
            <form onSubmit={update}>
                <div className="row m-3">
                <div className="col-2">
                <label className="lead">
                Name:
                </label>
                </div>
                <div className="col-10">
                <input className="form-control" type="text" value={name}  onChange={handleName} ></input> 
                </div>
                </div>

                <div className="row m-3">
                <div className="col-2">
                <label className="lead">
                Address:
                </label>
                </div>
                <div className="col-10">
                <input className="form-control" type="text" value={address}  onChange={handleAddress} ></input> 
                </div>
                </div>

                <div className="row m-3">
                <div className="col-2">
                <label className="lead">
                Phone:
                </label>
                </div>
                <div className="col-10">
                <input className="form-control" type="text" value={phone}  onChange={handlePhone} ></input> 
                <input type="hidden" name="id" value={id}></input>
                </div>

                </div>
                <div className="text-start m-3">

                <input type="submit" className="btn btn-primary " value="Update"></input> 

                </div>
                
            </form>


           
        </div>
    </div>
}

export default EditPage;