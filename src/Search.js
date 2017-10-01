import React from 'react';
import './Main.css';
import {TweenMax} from "gsap";


class HelloMessage extends React.Component {
 componentDidMount() {
  TweenMax.fromTo("#box", 5, {y:-100}, {y:100, yoyo:true});
 }

 render() {
  return <div id="box" className="hello">Hello {this.props.name}</div>;
 }
}


export default HelloMessage;
