import { useState,  useEffect } from 'react';
import Item from './Item';

function Students({count,setCount,name,setName,address,setAddress,phone,setPhone})
{
    const [students,setStudents]=useState([]);

   

    useEffect(()=>
      {
        fetch("http://127.0.0.1:8000/api/index").then((response)=>
        {
            //console.log(response);
            return response.json();
        }).then((responseData)=>{
           // console.log(responseData);
           setStudents(responseData);
        })
      },[count]);




    return (
        <div className="container">
            <table className="table table-dark">
                <thead>

                <tr>
                    <th>Student Id</th>
                    <th>Student Name</th>
                    <th>Student Address</th>
                    <th>Phone</th>
                    <th className="text-center" colSpan="2">Actions</th>
                </tr>

                </thead>
               
                {students.map((item)=>(<Item key={item.id} item={item} count={count} setCount={setCount} name={name} setName={setName} address={address} setAddress={setAddress} phone={phone} setPhone={setPhone}    />))}
            </table>

        </div>
    );
}

export default Students;