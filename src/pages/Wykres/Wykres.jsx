

import Chartdrop from "../../components/chart/Chartdrop";
import Chart from "../../components/chart/Chart";
import Chart1 from "../../components/chart/Chart1";
import Chart2 from "../../components/chart/Chart2";
import Chart3 from "../../components/chart/Chart3";
import Chart4 from "../../components/chart/Chart4";
import { userData } from "./dumyData";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { format } from 'date-fns';
import { Tab } from 'semantic-ui-react';
import "./chart.css";



export default function Wykres() {

  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");
const [createdAt, setCreateAt] = useState("");
const [ratingSlaby, setRatingSlaby] = useState("");

  const { user } = useContext(Context);


  const panes = [
    { menuItem: 'Wszystkie emocje', render: () => <Tab.Pane><Chart4 /> </Tab.Pane> },
    { menuItem: 'Emocje w procentach', render: () => <Tab.Pane><Chart3 /></Tab.Pane> }, 
    { menuItem: 'Emocje oddzielnie', render: () => <Tab.Pane>  < Chartdrop/> </Tab.Pane> },
  ]


  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/?user="+user._id);
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
  }, []);
  //console.log(format(post[0].createdAt, "dd/mm/yyyy"));
  //const datta = format(post[0].createdAt, 'dd/mm/yyyy')
  //console.log(datta)
  //format(post[0].createdAt, "dd/mm/yyyy")

  //console.log(post[0].createdAt);
  return (
    <div >
        <Tab panes={panes} />
     
     
      
      
    </div>
  );
}
