import React, { Component } from "react";
import SlickSlider from "./slider";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClient: false
    };
  }

  componentDidMount() {
    this.setState({ isClient: true });
  }

  render() {
    const { children, responsive, ...rest } = this.props;
    const { isClient } = this.state;

    return (
      <SlickSlider
        key={isClient ? "client" : "server"}
        responsive={isClient ? responsive : null}
        {...rest}
      >
        {children}
      </SlickSlider>
    );
  }
}

export default Slider;
