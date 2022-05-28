import axios from "axios";
import AcccessibleTable from "../../component/table";
import React, { useState, useEffect } from "react";



function Setting(){


  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      setPost(response.data);
    });
  }, []);



return <>
<div className="">

   
<div className="row mt-4">
        <div className="col-12">
           <div className="table-responsive">
             {post.name}
             {post.username}
             {post.email}
              <AcccessibleTable rows={post} />
           {/* <AcccessibleTable />
           <AcccessibleTable /> */}
           </div>
        </div>
    </div>


   
</div>
 


</>
}

export default Setting;