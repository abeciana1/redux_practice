import { React } from "react";
// import logo from './logo.svg';
import "./App.css";
import BakerComponent from "./Compoonents/BakerComponent";
import CakeComponent from "./Compoonents/CakeComponent";

import { connect } from "react-redux";
import { getBakers } from "./actions/baker-actions";

const renderBakers = (props) => {
  props.getBakers()
}

function App(props) {
  renderBakers(props)
  return (
    <>
      <div style={{ margin: "50px", textAlign: "center" }}>
        <CakeComponent />
      </div>
      <BakerComponent />
    </>
  );
}

const mapStateToProps = (state) => {
  return state.baker
}

const mapDispatchToProps = {
  getBakers,
}

export default connect(mapStateToProps, mapDispatchToProps)(App, renderBakers);