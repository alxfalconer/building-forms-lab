import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput.js";
import Band from "../components/Band.js";

class BandsContainer extends Component {
  bandList = () => {
    return this.props.bands.map((band, id) => <Band key={id} text={band} />);
  };

  render() {
    return (
      <div>
        <div>
          <BandInput />
        </div>
        <ul>{this.bandList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { bands: state.bands };
};

export default connect(mapStateToProps)(BandsContainer);