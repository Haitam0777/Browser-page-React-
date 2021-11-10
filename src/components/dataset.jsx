import React, { Component } from "react";
import "../css/dataset.css";

export default class Dataset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: this.props.data
    };
  }
  render() {
    const { dataset } = this.state;

    return (
      <div id="main">
        <div id="con1">
          <h1>
            <a href={dataset.landingPage}>{dataset.title}</a>
          </h1>
        </div>
        <div id="con2">
          <div id="sub1">
            <div id="par1">
              <p id="par">{dataset.description}</p>
            </div>
            <div id="par2">
              <p>
                <strong>Tags:</strong>
                {dataset.keyword.map((tag, index) => (
                  <a
                    class="tags"
                    href={`https://data.nasa.gov/browse?tags=${tag}`}
                  >
                    {tag}
                    {index < dataset.keyword.length - 1 ? "," : ""}
                  </a>
                ))}
              </p>
            </div>
          </div>
          <div id="sub2">
            <p id="ed">
              <strong>Last edit:</strong>
              <br />
              {dataset.issued}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
