import React, { Component } from "react";
import "../css/filters.css";

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.nbrOfDatasets,
      elapsed: this.props.elapsedTime,
      query: this.parseQueryString()
    };
  }
  parseQueryString() {
    var str = window.location.search;
    var objURL = {};

    str.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function (
      $0,
      $1,
      $2,
      $3
    ) {
      objURL[$1] = $3;
    });
    return objURL;
  }

  filterValue(filterId) {
    return this.state.query[filterId] ? this.state.query[filterId] : "Any";
  }

  render() {
    const { count, elapsed } = this.state;
    return (
      <div id="filters">
        <h2 id="title">{`Found ${count} datasets (${elapsed} seconds) `}</h2>
        <table id="filters-table">
          <tbody>
            <tr>
              <th>Theme</th>
              <th>Source</th>
              <th>Parameter</th>
              <th>Audience</th>
              <th>Speciality</th>
              <th>Format</th>
              <th>LanguageType</th>
              <th>Language</th>
            </tr>
            <tr>
              <td>{this.filterValue("theme")}</td>
              <td>{this.filterValue("source")}</td>
              <td>{this.filterValue("parameter")}</td>
              <td>{this.filterValue("audience")}</td>
              <td>{this.filterValue("speciality")}</td>
              <td>{this.filterValue("format")}</td>
              <td>{this.filterValue("languageType")}</td>
              <td>{this.filterValue("language")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
