/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "cybersec photo";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "How to become a Security Engineer 🖥️",
    description:
      "Charting Your Path to Become a Security Engineer with TryHackMe",
    url: "https://www.linkedin.com/pulse/charting-your-path-become-security-engineer-m-zain-ul-abideen-chand/?trackingId=BUczeptASPaaYAdDtrs%2FQg%3D%3D",
  },
  {
    title: "Getting into Cybersecurity Guide",
    description:
      "Watch my detailed video with Mr. Shakeel Ahmad if you are looking for a complete guide to Cybersecurity",
    url: "https://youtu.be/8GKayjFmm9o?feature=shared",
  },
  {
    title: "Hunting Bugs For Money $",
    description:
      "Are you interested in finding bugs and do you wanna get paid and awarded swags by finding them then this complete guide to become a Bug Hunter is for you.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "My Youtube Channel ",
    description:
      "Link to My Youtube channel where I upload crispy and interesting content related to cybersecurity",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
