import React, { Component } from "react";
import Loading from "./loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={Loading}
          alt="Loading"
          style={{ height: "50px", width: "50px" }}
        />
      </div>
    );
  }
}

export default Spinner;
