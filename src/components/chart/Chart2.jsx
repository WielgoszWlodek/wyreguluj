import React from "react";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";

import {
  Line,
  LineChart,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  XAxis
} from "recharts";

class Chart2 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=WIQCF7TIX551MFRZ"
      )
      .then(res => {
        const keys = Object.keys(res.data);

        console.log(keys[1]);

        const data = Object.entries(res.data[keys[1]]).map(([key, values]) => ({
          category: key,
          value: parseFloat(values["1. open"]),
          category1: key,
          value: parseFloat(values["1. open"])
        }));
        this.setState({ list: data });
        console.log(data)
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
}

export default Chart2;
