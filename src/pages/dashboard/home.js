import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import App from "../../component/app";
import Carddiv from "../../component/card";
import StandardImageList from "../../component/image";
import Pie from "../../component/pie";
import CustomizedTables from "../../component/table";
import MediaControlCard from "../../component/uicontrol";
import AlignItemsList from "./list";


function Home(props){
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
    <div className="col-lg-12 col-12">
    <AlignItemsList  />
    </div> 
             
    </div>
   
</div>
 


</>
}

export default Home;