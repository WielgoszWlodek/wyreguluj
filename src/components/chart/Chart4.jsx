import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { Dropdown } from 'semantic-ui-react';
import "./chart.css";


const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function Chart4() {


    const [post, setPost] = useState({});
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [createdAt, setCreateAt] = useState("");
    const [limituje, setLimituje] = useState(3);
    const [apiUrl, setApiUrl] = useState('/posts/?user='+user._id+'&limit=5');
    const [mySelect, setMySelect]=useState("");
    
    
    useEffect(() => {
      const getPost = async () => {
        const res = await axios.get(apiUrl);
        setTitle(res.data.title);
        setDesc(res.data.desc); 
        setCreateAt(res.data.createdAt); 
       
        const newData = res.data.reverse().map((item)=>{
          return {
            name: item.bodzce[0],
            słaby: item.ratingSlaby[0] || 0,
            zaskoczony: item.ratingZaskoczony[0] || 0,
            zniesmaczony: item.ratingZniesmaczony[0] || 0,
            lękliwy: item.ratingLekliwy[0] || 0,
            smutny: item.ratingSmutny[0] || 0,
            szczęśliwy: item.ratingSzczesliwy[0] || 0,
            rozgniewany: item.ratingRozgniewany[0] || 0,
          };
        });
        console.log(newData)
        setPost(newData)
        console.log(res.data)
      };
      getPost();
     
    }, [apiUrl]);
 
    const countryOptions1 = [
      { key: '1', value: 5,  text: '5 ostatnich wpisów'},
      { key: '2', value: 10,  text: '10 ostatnich wpisów'},
      { key: '3', value: 15, text: '15 ostatnich wpisów'},
      { key: '4', value: 20, text: '20 ostatnich wpisów'},
      { key: '5', value: 25, text: '25 ostatnich wpisów'},
  ]

  const onChange1 = (event, result) => {
    
    setApiUrl('/posts/?user='+user._id+'&limit='+result.value);
    setMySelect(result.value);
};




  return (
    <div className="chart">

    <div style={{
            display: 'block', width: 250, padding: 20
    }}>
 


                 <Dropdown 
                    name="country1"
                    fluid
                    search
                    selection
                    placeholder='Ilość ostatnich wpisów'
                    options={countryOptions1}
                    onChange={onChange1}
                    value={mySelect}
                />

</div>

                

    <LineChart
      width={1200}
      height={400}
      data={post}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="słaby"
        stroke="#0085ad"
        activeDot={{ r: 8 }}
      />
      <Line
       type="monotone"
       dataKey="zaskoczony"
       stroke="#a333c8"
      />
      <Line
       type="monotone"
       dataKey="zniesmaczony"
       stroke="#767676"
      />
        <Line
       type="monotone"
       dataKey="lękliwy"
       stroke="#6bd85f"
      />
        <Line
       type="monotone"
       dataKey="smutny"
       stroke="#6435c9"
      />
        <Line
       type="monotone"
       dataKey="szczęśliwy"
       stroke="#fbbd08"
      />
        <Line
       type="monotone"
       dataKey="rozgniewany"
       stroke="#db2828"
      />
    </LineChart>
    </div>
  );
}
