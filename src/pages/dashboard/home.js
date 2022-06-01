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
    const [series,setSeries] = useState([
      {
        name: "series-1",
        data: []
      }
    ]);
    const [options,setOptions] = useState({
      chart: {
        id: "line"
      },
      xaxis: {
        categories: []
      }
    });
    
    const api = () =>{
      const number = [];
      const id = [];

      axios
        .get(`https://jsonplaceholder.typicode.com/comments`,{
          params: {
            _limit: 9
           }
        })
        .then(res => { 
          setComments(res.data)
          res.data.map((e) => {
            number.push(e.postId)
            id.push(e.id)
          })
          setOptions({
            chart: {
              id: "line"
            },
            xaxis: {
              categories: id
            }
          })

          setSeries([
            {
              name: "series-1",
              data: number
            }
          ])
        })
        .catch(err => console.error(err));
    }

        useEffect(() => {
        api(); 
        },[])
    

return <>
<div className="">
    <div className="row">
        <div className="col-12 text-center">
        <Carddiv data={props.data} />
        </div>         
    </div>
    <div className="row mt-4">
        <div className="col-6 mb-4">
         <App series={series} options={options}  type="line" />
        </div> 
        <div className="col-6 mb-4">
         <Pie data={comments}/> 
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