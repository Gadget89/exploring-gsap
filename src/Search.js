import React from 'react';
import './Main.css';
import Logo from './assets/new-logo.png';
import {TweenMax, TimelineMax} from "gsap";

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
    var navAnimation = new TimelineMax({delay:1});
    var navLoaded = () => (
      document.getElementById('lg_screen_nav').className = "pin-nav"
    )
    navAnimation.add(TweenMax.fromTo("#lg_screen_nav", 2, {y:-35}, {y:25, yoyo:true, onComplete: navLoaded}));
 }

 render() {
  return (
    <nav id="lg_screen_nav">
      <img
        alt=""
        className="navLogo"
        src={Logo}
        title="Home">
      </img>
      <ul>
        {navListItem}
      </ul>
    </nav>
  );
 }
}


export default navContent;
