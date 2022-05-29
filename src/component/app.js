import React, { Component, useEffect, useState } from "react";
import Chart from "react-apexcharts";

function App(props) {
 
  // const [series,setSeries] = useState(null)
  // const [labels,setLabels] = useState(null)
   const [data,setData] = useState(null)
   const [categories,setCategories] = useState({})

  
  // useEffect(() => {
  //   setSeries(props.data.map((e) => e.postId,))
  //   setLabels(props.data.map((e) => `${e.name}`,))
  // })

 
  
  const[state,setState] = useState({options: {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [12,12,12,12,12,12,12,12,12,12]
    }
  },
  series: [
    {
      name: "series-1",
      data: [1,5,8,5,6,2,5,5,5]
    }
  ]})

  

    return <>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
</>
}

export default App;
