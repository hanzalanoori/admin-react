import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import App from "../../component/app";
import Barchart from "../../component/barchart";
import Linesss from "../../component/line";
import Pie from "../../component/pie";
import Recipecard from "../../component/recipecard";
import axios from "axios";
import React, { useState, useEffect } from "react";



function Analytics(){


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
        <div className="col-6 mb-4">
         <App data={comments} />
        </div> 

        
        {/* <div className="col-6 mb-4">
         <Barchart />
        </div> */}
        <div className="col-6 mb-4">
         <Pie data={comments}/>
        
        </div>  
        <div className="col-12 mb-4">
         <Linesss />
        </div>            
    </div>
   
   
</div>
 


</>
}

export default Analytics;