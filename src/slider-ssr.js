import React, { Component, forwardRef } from "react";
import SlickSlider from "./slider";

class SliderInner extends Component {
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
        ref={this.props.innerRef}
        {...rest}
      >
        {children}
      </SlickSlider>
    );
  }
}

const Slider = forwardRef((props, ref) => (
  <SliderInner {...props} innerRef={ref} />
));

export default Slider;
