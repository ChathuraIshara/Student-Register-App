import React from "react"
import axios from "axios"
import EditPage from "./EditPage";
import { Link } from "react-router-dom";

function Item({item,count,setCount,name,setName,address,setAddress,phone,setPhone})
{

   async function deleteStudent(studentid)
   {
     await axios.delete('http://127.0.0.1:8000/api/delete/'+studentid);
     console.log("succesfully deleted student");
     setCount(count+1);


   }





    return <React.Fragment>
    <tbody>

    <tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.address}</td>
    <td>{item.phone}</td>
    <td><button onClick={() => deleteStudent(item.id)} className="btn btn-danger">Delete</button></td>
    <td>
        <Link to={`/editpage/${item.id}`} state={{
          name:item.name,
          address:item.address,
          phone:item.phone
        }}>
        <button  className="btn btn-success">Update</button>
        </Link>
        </td>
    </tr>

    </tbody>
   
    </React.Fragment>
}

export default Item;