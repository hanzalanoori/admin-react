import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import App from "../../component/app";
import Barchart from "../../component/barchart";
import Linesss from "../../component/line";
import Pie from "../../component/pie";
import Recipecard from "../../component/recipecard";

function Analytics(){
return <>
<div className="">
    <div className="row">
        <div className="col-6 mb-4">
         <App />
        </div> 
        {/* <div className="col-6 mb-4">
         <Barchart />
        </div> */}
        <div className="col-6 mb-4">
         <Pie />
        </div>  
        <div className="col-12 mb-4">
         <Linesss />
        </div>            
    </div>
   
   
</div>
 


</>
}

export default Analytics;