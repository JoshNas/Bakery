import React, { Component } from "react";
import Popup from "reactjs-popup";

export class CreditPopup extends Component {
  render() {
    return (
      <Popup trigger={<button className="btn btn-outline-info btn-sm">i</button>} position="left center">
      <div class="text-wrap">
        {this.props.credit}
      </div>
      </Popup>
    )
  }
}
