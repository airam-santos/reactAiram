import * as React from "react";

export interface ButtonProps {
  title: string;
}
/*incrementCount() {
     this.setState({
        numberOfClicks: this.state.numberOfClicks + 1
     });
  }

  render() {
     return <button onClick={this.incrementCount}>{this.state.numberOfClicks}</button>;
  }*/
export default class Button extends React.Component<ButtonProps, {}> {
  render() {
    return <button>{this.props.title}</button>;
  }
}
