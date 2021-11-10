import React, { Component } from "react";
import Header from "./header";
import Filters from "./filters";
import Dataset from "./dataset";

import "../css/app.css";

export default class Browser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsed: 0,
      error: null,
      isLoaded: false,
      datasets: []
    };
  }

  componentDidMount() {
    this.setState({
      elapsed: new Date()
    });

    fetch(`https://data4v1.herokuapp.com/query${window.location.search}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            elapsed: (new Date() - this.state.elapsed) / 1000,
            isLoaded: true,
            datasets: result.dataset
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, datasets, elapsed } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div id="loading">
          <svg
            width="100px"
            height="100px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              r="0"
              fill="none"
              stroke="#787878"
              stroke-width="4"
            >
              <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1s"
                values="0;48"
                keyTimes="0;1"
                keySplines="0 0.2 0.8 1"
                calcMode="spline"
                begin="0s"
              ></animate>
              <animate
                attributeName="opacity"
                repeatCount="indefinite"
                dur="1s"
                values="1;0"
                keyTimes="0;1"
                keySplines="0.2 0 0.8 1"
                calcMode="spline"
                begin="0s"
              ></animate>
            </circle>
            <circle
              cx="50"
              cy="50"
              r="0"
              fill="none"
              stroke="#000000"
              stroke-width="4"
            >
              <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1s"
                values="0;48"
                keyTimes="0;1"
                keySplines="0 0.2 0.8 1"
                calcMode="spline"
                begin="-0.5s"
              ></animate>
              <animate
                attributeName="opacity"
                repeatCount="indefinite"
                dur="1s"
                values="1;0"
                keyTimes="0;1"
                keySplines="0.2 0 0.8 1"
                calcMode="spline"
                begin="-0.5s"
              ></animate>
            </circle>
          </svg>
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <Filters nbrOfDatasets={datasets.length} elapsedTime={elapsed} />
          <div id="flow">
            {datasets.map((dataset) => (
              <Dataset data={dataset} />
            ))}
          </div>
        </div>
      );
    }
  }
}
