import React from "react";
import api from "../assets/portfolio/a1.jpg";
import apod from "../assets/portfolio/a2.jpg";
import iptracker from "../assets/portfolio/a3.jpg";
import nftportal from "../assets/portfolio/a4.jpg";
import webpostman from "../assets/portfolio/a5.jpg";
import waveportal from "../assets/portfolio/a6.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: api,
      link: '#',
     // repo: '#'
    },
    {
      id: 2,
      src: webpostman,
      link: '#',
    
    },
    {
      id: 3,
      src: apod,
      link: '#',

    },
    {
      id: 4,
      src: waveportal,
      link: '#',
   
    },
    {
      id: 5,
      src: nftportal,
      link: '#',

    },
    {
      id: 6,
      src: iptracker,
      link: '#',

    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">my projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
