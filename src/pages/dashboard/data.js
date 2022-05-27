import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Comment from "../../component/comment";
import AcccessibleTable from "../../component/table";


function createData(name, email, phone, address, mail) {
  return { name, email, phone, address, mail };
}

const rows = [
  createData('Hanzala', 'Hanzala@gmail.com', '03112872380', 'Street 4 ', 4.0),
  createData('Hadi', 'Hadi@gmail.com', '03124548745', 'Street 4 ', 4.3),
  createData('Huzaifa', 'Huzaifa@gmail.com', '03154845625', 'Street 4 ', 6.0),
  createData('Abdul Basit', 'Basit@gmail.com', '03475461254', 'Street 4 ', 4.3),

];



function Data(){
return <>
<div className="">

   
<div className="row mt-4">
        <div className="col-12">
           <div className="table-responsive">
           <AcccessibleTable rows={rows} />
           </div>
        </div>
    </div>


    <div className="row mt-4">
      <div className="col-12"> <Typography variant="h4" component="div" gutterBottom>
       Contact Form Data
      </Typography></div>
        <div className="col-4 mb-4">       
         <Comment />
        </div> 
        <div className="col-4 mb-4">
        <Comment />
        </div> 
        <div className="col-4 mb-4">
        <Comment />
        </div> 
    
    </div>
   
   
</div>
 


</>
}

export default Data;