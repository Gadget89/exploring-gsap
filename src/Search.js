import React from 'react';
import './Main.css';
import {TweenMax} from "gsap";

const navItem = [
  {
    id: "about",
    name: "my story",
    link: "#about",
    title: "Check out my story."
  },
  {
    id: "skills",
    name: "skills",
    link: "#skills",
    title: "Check out my skills."
  },
  {
    id: "projects",
    name: "projects",
    link: "#projects",
    title: "Check out my projects"
  },
  {
    id: "contact",
    name: "contact me",
    link: "#contact",
    title: "Let's get in touch"
  },
  {
    id: "blog",
    link: "https://medium.com/@nicolas.roybal",
    name: "blog",
    title: "Check out my blog"
  }
]

class HelloMessage extends React.Component {
 componentDidMount() {
  TweenMax.fromTo("#box", 5, {y:-100}, {y:100, yoyo:true});
 }

 render() {
  return <div id="box" className="hello">Hello {this.props.name}</div>;
    <nav id=lg-screen>
      <ul>
        <li id="box">li 1</li>
        <li id="box">li 2</li>
      </ul>
    </nav>
 }
}


export default HelloMessage;
