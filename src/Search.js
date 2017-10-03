import React from 'react';
import './Main.css';
import Logo from './assets/new-logo.png';
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
// Map through array and return a <li>
const navListItem = navItem.map((button) =>
  <li

    key={button.id}>
    <a
      title={button.title}
      href={button.link}>
      {button.name}
    </a>
  </li>
)

class navContent extends React.Component {
 componentDidMount() {
  TweenMax.fromTo("#lg_screen_nav", 1, {y:-25}, {y:20, yoyo:true});
  TweenMax.fromTo("#lg_screen_logo", 1, {y:-25}, {y:20, yoyo:true});
 }

 render() {
  return (
    <nav>
      <img
        alt=""
        className="navLogo"
        id="lg_screen_logo"
        src={Logo}
        title="Home">
      </img>
      <ul id="lg_screen_nav">
        {navListItem}
      </ul>
    </nav>
  );
 }
}


export default navContent;
