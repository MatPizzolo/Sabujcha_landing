import React from "react";
import { StaticImage } from "gatsby-plugin-image";


const data = [
  {
    id: 1,
     icon: <StaticImage className="social-icon" src="./github.svg" alt="git icon"/>,
    url: "https://github.com/mateopizzolo",
  },
  {
    id: 2,
    icon: <StaticImage className="social-icon" src="./linkedin.svg" alt="git icon"/>,
    url: "https://www.linkedin.com/in/mateo-pizzolo/",
  }
]

export default data