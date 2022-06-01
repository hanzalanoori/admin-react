import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Comment from "../../component/comment";
import AcccessibleTable from "../../component/table";
import axios from "axios";
import React, { useState, useEffect } from "react";





function Data(){

const [comments,setComments] = useState([]);

const api = () =>{
  axios
    .get(`https://jsonplaceholder.typicode.com/comments`,{
      params: {
        _limit: 9
       }
    })
    .then(res => setComments(res.data))
    .catch(err => console.error(err));
  
}

useEffect(() => {
  api();
},[])




return <>
<div className="">

   
<div className="row mt-4">
        <div className="col-12">
           <div className="table-responsive">
           {/* <AcccessibleTable rows={rows} /> */}
           </div>
        </div>
    </div>


    <div className="row mt-4">
         <Comment data={comments} />
       
    </div>
   
   
</div>
 


</>
}

export default Data;