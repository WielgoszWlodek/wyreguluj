import React from "react";
import { PieChart, Pie, Cell , Legend, ResponsiveContainer } from "recharts";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { Dropdown } from 'semantic-ui-react';
import "./chart.css";



const COLORS = ["#a333c8", "#0085ad", "#767676", "#21ba45", "#6435c9", "#fbbd08",  "#db2828"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Chart2() {

  const [post, setPost] = useState({});
  const [post1, setPost1] = useState({});
  const [post2, setPost2] = useState({});
  const [post3, setPost3] = useState({});
  const [post4, setPost4] = useState({});
  const [post5, setPost5]= useState({});
  const [post6, setPost6]= useState({});

  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [createdAt, setCreateAt] = useState("");
  const [apiUrl, setApiUrl] = useState('/posts/?user='+user._id+'&limit=5');
  const [mySelect, setMySelect]=useState("");

  
  
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(apiUrl);
      setTitle(res.data.title);
      setDesc(res.data.desc); 
      setCreateAt(res.data.createdAt); 
  
    
      
      const newData = res.data.map((item)=>{
        return {
          value: item.ratingZaskoczony[0] ,
          };
      });

      const newData1 = res.data.map((item)=>{
        return {
          value: item.ratingSlaby[0] ,
          };
      });

      const zniesmaczony = res.data.map((item)=>{
        return {
          value: item.ratingZniesmaczony[0] ,
          };
      });

      const lekliwy = res.data.map((item)=>{
        return {
          value: item.ratingLekliwy[0] ,
          };
      });

      const smutny = res.data.map((item)=>{
        return {
          value: item.ratingSmutny[0] ,
          };
      });

        const szczesliwy = res.data.map((item)=>{
        return {
          value: item.ratingSzczesliwy[0] ,
          };
      });

      const rozgniewany = res.data.map((item)=>{
        return {
          value: item.ratingRozgniewany[0] ,
          };
      });

      const result1 = Object.keys(newData).map((key) => newData[key]);
      const result2 = Object.keys(newData1).map((key) => newData1[key]);
      const resultzniesmaczony = Object.keys(zniesmaczony).map((key) => zniesmaczony[key]);
      const resultlekliwy = Object.keys(lekliwy).map((key) => lekliwy[key]);
      const resultsmutny = Object.keys(smutny).map((key) => smutny[key]);
      const resultszczesliwy = Object.keys(szczesliwy).map((key) => szczesliwy[key]);
      const resultrozgniewany = Object.keys(rozgniewany).map((key) => rozgniewany[key]);

console.log(result1);
      console.log(newData)
      
      
  console.log(newData)
      setPost(result1)
      setPost1(result2)
      setPost2(resultzniesmaczony)
      setPost3(resultlekliwy)
      setPost4(resultsmutny)
      setPost5(resultszczesliwy)
      setPost6(resultrozgniewany)
   
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

  console.log(post)
  console.log(post6)

  const data1 = [
    {title:"One",prix:100},
    {title:"Two",prix:200},
    {title:"Three",prix:300}
  ];
  const result1 = Object.keys(post).map((key) => post[key]);
   const result = result1.reduce((total, currentValue) => total = total + currentValue.value,0);

  
  const result2 = Object.keys(post1).map((key) => post1[key]);
  const result3 = result2.reduce((total, currentValue) => total = total + currentValue.value,0);

  const  resultzniesmaczony = Object.keys(post2).map((key) => post2[key]);
  const zniesmaczonywynik = resultzniesmaczony.reduce((total, currentValue) => total = total + currentValue.value,0);

  const  resultlekliwy = Object.keys(post3).map((key) => post3[key]);
  const lekliwywynik = resultlekliwy.reduce((total, currentValue) => total = total + currentValue.value,0);

  const  resultsmutny = Object.keys(post4).map((key) => post4[key]);
  const smutnywynik = resultsmutny.reduce((total, currentValue) => total = total + currentValue.value,0);

    const  resultszczesliwy = Object.keys(post5).map((key) => post5[key]);
  const szczesliwywynik = resultszczesliwy.reduce((total, currentValue) => total = total + currentValue.value,0);

  const  resultrozgniewany = Object.keys(post6).map((key) => post6[key]);
  const rozgniewanywywynik = resultrozgniewany.reduce((total, currentValue) => total = total + currentValue.value,0);

console.log(result)
console.log(result3)
  console.log(smutnywynik)
console.log(lekliwywynik)
console.log(zniesmaczonywynik)
console.log(resultrozgniewany)

  const data = [
  { name: "Zaskoczony", value: result},
  {name: "Słaby", value: result3 },
  { name: "Zniesmaczony", value: zniesmaczonywynik },
  { name: "Lękliwy", value: lekliwywynik },
  { name: "Smutny", value: smutnywynik },
    { name: "Szczęśliwy", value: szczesliwywynik },
    { name: "Rozgniewany", value: rozgniewanywywynik }
];

  return (
    <div className="chart">

      
    <div style={{
            display: 'block', width: 270, padding: 30, marginLeft: 50
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

    <ResponsiveContainer width={700} height={700} className="text-center">
    <PieChart width={700} height={700}>

      <Legend layout="vertical" verticalAlign="top" align="top" />
      <Pie
        data={data}
        cx="50%"
        cy="20%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={140}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        
      </Pie>
    </PieChart>
    </ResponsiveContainer>
    </div>
  );
}