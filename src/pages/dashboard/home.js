import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import App from "../../component/app";
import Carddiv from "../../component/card";
import Comment from "../../component/comment";
import StandardImageList from "../../component/image";
import Pie from "../../component/pie";
import MediaControlCard from "../../component/uicontrol";
import axios from "axios";
import React, { useState, useEffect } from "react";



function Home(props){

const [comments,setComments] = useState([]);

useEffect(() => {
  axios
    .get(`https://jsonplaceholder.typicode.com/comments`,{
      params: {
        _limit: 6
       }
    })
    .then(res => setComments(res.data))
    .catch(err => console.error(err));
  
})


return <>
<div className="">
    <div className="row">
        <div className="col-12 text-center">
        <Carddiv data={props.data} />
        </div>         
    </div>
    <div className="row mt-4">
        <div className="col-6 mb-4">
         <App />
        </div> 
        <div className="col-6 mb-4">
         <Pie />
        </div>
                  
    </div>

    <div className="row">
        <div className="col-4 mb-4">
         <MediaControlCard />
        </div> 
        <div className="col-4 mb-4">
         <MediaControlCard />
        </div>
        <div className="col-4 mb-4">
         <MediaControlCard />
        </div>
                  
    </div>


    
  
    <div className="row mt-4">
    <div className="col-12">
    <Carddiv data={props.data}  imagelist={true} />
    </div>          
    </div>

    <div className="row mt-4">
    <Comment data={comments}  />
             
    </div>
   
</div>
 


</>
}

export default Home;