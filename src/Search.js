import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

class HelloMessage extends React.Component {
 componentDidMount() {
  TweenMax.to("#box", 1, {yPercent:100, ease:Power2.easeInOut, repeat:0, yoyo:true})
 }
 render() {
  return <div id="box">Hello {this.props.name}</div>;
 }
}
export default HelloMessage;
