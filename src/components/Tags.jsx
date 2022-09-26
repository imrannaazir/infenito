import React from "react";

const Tags = () => {
  const tags = [
    {
      id: 1,
      name: "Application Stacks",
      img: "https://i.ibb.co/0QcrkCc/application.webp",
      color: "#ED4B9E",
      details:
        "We develop android & iOS apps which can increase customer engagement and generate maximum ROI with maximum lead conversions.",
    },
    {
      id: 2,
      name: "Website Stacks",
      img: "https://i.ibb.co/WpH12CN/website.webp",
      color: "#4B4DED",
      details:
        "Get extensively researched website and web app development services using the latest technologies like MEAN, MERN, Laravel, BootStrap, and much more.",
    },
    {
      id: 3,
      name: "Database Stacks",
      img: "https://i.ibb.co/nnhTVD1/db.webp",
      color: "#31D0AA",
      details:
        "We have a set of technologies and services that organizations use to store, manage, and access data.",
    },
    {
      id: 4,
      name: "AI/ML Stacks",
      img: "https://i.ibb.co/2yrxLJB/ai.webp",
      color: "#F4C751",
      details:
        "We provide features to larger organizations which have already started maturing their processes to create standardized ML pipelines that are optimized for scale, efficiency, and control.",
    },
    {
      id: 5,
      name: "Blockchain",
      img: "https://i.ibb.co/7WF63qh/blockchain.webp",
      color: "#FF3131",
      details:
        "We use Blockstack, a project that utilizes blockchain technology to expand the functionalities of bitcoin by serving as a second layer protocol.",
    },
    {
      id: 6,
      name: "Gaming Stacks",
      img: "https://i.ibb.co/1ZPrwbq/game.webp",
      color: "#F4C751",
      details:
        "Gaming services serve customers in gambling establishments, such as casinos or racetracks. Some workers tend slot machines or deal cards.",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-y-10 w-1/2">
      {tags.map((tag) => (
        <div className="w-52" key={tag.id}>
          <img src={tag.img} alt="" />
          <h5 className="my-4 text-xl font-semibold">{tag.name}</h5>
          {/* line */}
          <div className={`bg-[${tag.color}] w-28 h-1 mb-6`} />
          <p>{tag.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Tags;
