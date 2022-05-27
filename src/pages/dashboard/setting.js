import AcccessibleTable from "../../component/table";



function createData(name, email, phone, address, mail) {
  return { name, email, phone, address, mail };
}

const rows = [
  createData('Hanzala', 'Hanzala@gmail.com', '03112872380', 'Street 4 ', 4.0),
  createData('Hadi', 'Hadi@gmail.com', '03124548745', 'Street 4 ', 4.3),
  createData('Huzaifa', 'Huzaifa@gmail.com', '03154845625', 'Street 4 ', 6.0),
  createData('Abdul Basit', 'Basit@gmail.com', '03475461254', 'Street 4 ', 4.3),
  createData('Ali Hussain', 'Ali@gmail.com', '03002545845', 'Street 4 ', 3.9),
  createData('Hanzala', 'Hanzala@gmail.com', '03112872380', 'Street 4 ', 4.0),
  createData('Hadi', 'Hadi@gmail.com', '03124548745', 'Street 4 ', 4.3),
  createData('Huzaifa', 'Huzaifa@gmail.com', '03154845625', 'Street 4 ', 6.0),
  createData('Abdul Basit', 'Basit@gmail.com', '03475461254', 'Street 4 ', 4.3),
  
];



function Setting(){
return <>
<div className="">

   
<div className="row mt-4">
        <div className="col-12">
           <div className="table-responsive">
           <AcccessibleTable rows={rows} />
           {/* <AcccessibleTable />
           <AcccessibleTable /> */}
           </div>
        </div>
    </div>


   
</div>
 


</>
}

export default Setting;