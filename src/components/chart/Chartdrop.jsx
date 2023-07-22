import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import Chart from "./Chart";
import ChartZaskoczony from "./ChartZaskoczony"
import ChartZniesmaczony from "./ChartZniesmaczony"
import ChartLekliwy from "./ChartLekliwy";
import ChartRozgniewany from "./ChartRozgniewany"
import ChartSmutny from "./ChartSmutny"
import ChartSzczesliwy from "./ChartSzczesliwy"
import { useContext, useState , useEffect} from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Chartdrop() {

    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [createdAt, setCreateAt] = useState("");
    const [ratingSlaby, setRatingSlaby] = useState("");
    const { user } = useContext(Context);
     const [selected, setSelected] = useState("");
     const [apiUrl, setApiUrl] = useState('/posts/?user='+user._id+'&limit=5');
     const [mySelect, setMySelect]=useState("");



    

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(apiUrl);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc); 
      setCreateAt(res.data.createdAt); 
      setRatingSlaby(res.data.ratingSlaby); 
  
        console.log(res.data)

        const keys = Object.keys(res.data);
        const data1 = Object.entries(res.data[keys[1]]).map(([key, values]) => ({
          category: key,
          value: parseFloat(values["2. high"])
        }));
        console.log(data1)
    };
    getPost();
   //console.log(post[0].createdAt);
  }, [apiUrl]);


const countryOptions = [
        { key: '1', value: < Chart data={post}   title="Słaby" grid dataKey= "ratingSlaby"/>,  text: 'Słaby' },
        { key: '2', value: <ChartZaskoczony data={post}   title="Zaskoczony" grid dataKey= "ratingZaskoczony"/>, text: 'Zaskoczony' },
        { key: '3', value: <ChartZniesmaczony data={post}   title="Zniesmaczony" grid dataKey= "ratingZniesmaczony"/>, text: 'Zniesmaczony' },
        { key: '4', value: <ChartLekliwy data={post}   title="Lękliwy" grid dataKey= "ratingLekliwy"/>,  text: 'Lękliwy' },
        { key: '5', value: <ChartSzczesliwy data={post}   title="Szczęśliwy" grid dataKey= "ratingSzczesliwy"/>,  text: 'Szczęśliwy' },
        { key: '6', value: <ChartRozgniewany data={post}   title="Rozgniewany" grid dataKey= "ratingRozgniewany"/>,  text: 'Rozgniewany' },
        { key: '7', value: <ChartSmutny data={post}   title="Smutny" grid dataKey= "ratingSmutny"/>, text: 'Smutny' },
    ]


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
  




    const onChange = (event, result) => {
        console.log("event", result.value);
        setSelected(result.value);
    };

   

  return (
    <div className="chart">

    <div className="amount">
                  <Dropdown  style={{width:"370px"}}
                    name="country1"
                    fluid
                    search
                    selection
                    placeholder='Ilość emocji'
                    options={countryOptions1}
                    onChange={onChange1}
                    value={mySelect}
                />

 < Dropdown 
                    name="country"
                    fluid
                    search
                    selection
                    placeholder='Wybierz emocję'
                    options={countryOptions}
                    onChange={onChange}
                    value={selected}
                />

                </div>
{selected}

  


  
  
    </div>
  );
}

{/*
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="createdAt" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
*/}