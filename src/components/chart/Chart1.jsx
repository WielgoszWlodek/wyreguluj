import "./chart.css";
import React, { PureComponent } from 'react';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';







export default function Chart1() {
  
const [post, setPost] = useState({});
const { user } = useContext(Context);
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");
const [createdAt, setCreateAt] = useState("");

useEffect(() => {
  const getPost = async () => {
    const res = await axios.get("/posts/?user="+user._id);
    setTitle(res.data.title);
    setDesc(res.data.desc); 
    setCreateAt(res.data.createdAt); 

  
    
    const newData = res.data.map((item)=>{
      return {
        name: item.createdAt,
        słaby: item.rating[0] || 0,
        rozkojarzony: item.rating1[0] || 0,
      };
    });
    console.log(newData)
    setPost(newData)
    console.log(res.data)
  };
  getPost();
 
}, []);
console.log(post)

const data = [
  {
    name:"klj",
    senny: 7,
    Rozkojarzony: 6,
    Apatyczny: 1
  },
  {
    name: "jjjj",
    senny: 3,
    Rozkojarzony: 3,
    Apatyczny: 7
  },
  {
    name: "kkk",
    senny: 4,
    Rozkojarzony: 6,
    Apatyczny: 3
  },

  
];


  return (
    <div className="chart">
    
      <AreaChart
      width={900}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="słaby"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="rozkojarzony"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="Apatyczny"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
    </div>
  );
}

{/*

axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=WIQCF7TIX551MFRZ`
      )
      .then(res => {
        const keys = Object.keys(res.data);

        console.log(keys[1]);

        const data = Object.entries(res.data[keys[1]]).map(([key, values]) => ({
          category: key,
          value: parseFloat(values["2. high"])
        }));
        this.setState({ list: data });
      });
  }

  render() {
    const object = { name: "yes", data: this.state.list };

    return (
      <LineChart width={500} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" type="category" />
        <YAxis dataKey="value" domain={["dataMin - 2", "dataMax"]} />
        <Tooltip />
        <Legend />

        <Line
          dataKey="value"
          data={object.data}
          name={object.name}
          key={object.name}
          dot={false}
        />
      </LineChart>
    );
  }






  
}*/}









{/*



import "./chart.css";
import React, { PureComponent } from 'react';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';







export default function Chart1() {
  
  const [post, setPost] = useState({});

const { user } = useContext(Context);
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");
const [createdAt, setCreateAt] = useState("");

useEffect(() => {
  const getPost = async () => {
    const res = await axios.get("/posts/?user="+user._id);
  
    setTitle(res.data.title);
    setDesc(res.data.desc); 
    setCreateAt(res.data.createdAt); 

    const newData = res.data.map((item)=>{
      return {
        name: item.createdAt,
        senny: item.rating[0],
      };
    });
    console.log(newData)
setPost(newData)
      console.log(res.data)
  };
  getPost();
 

}, []);
console.log(post)

const data = [
  {
    name:"klj",
    senny: 7,
    Rozkojarzony: 6,
    Apatyczny: 1
  },
  {
    name: "jjjj",
    senny: 3,
    Rozkojarzony: 3,
    Apatyczny: 7
  },
  {
    name: "kkk",
    senny: 4,
    Rozkojarzony: 6,
    Apatyczny: 3
  },

  
];


  return (
    <div className="chart">
    
        <AreaChart
      width={900}
      height={400}
      data={post}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="senny"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="Rozkojarzony"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="Apatyczny"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
    </div>
  );
}



*/}