import React from "react";
import icons from "../assets/icons/icons";
import Landing from "../nested/LandingPage";

function Services() {
  const Services = [
    {
      id: 1,
      icon: <icons.TextFormat />,
      title: "Refreshing Design",
      desc: "we dejoy working discrering client, people for whom quality, services, intefrity & aesthetics",
    },
    {
      id: 2,
      icon: <icons.Css />,
      title: "Based on tailwind css",
      desc: "we dejoy working discrering client, people for whom quality, services, intefrity & aesthetics",
    },
    {
      id: 3,
      icon: <icons.ViewInAr />,
      title: "300+ Component",
      desc: "we dejoy working discrering client, people for whom quality, services, intefrity & aesthetics",
    },
    {
      id: 4,
      icon: <icons.Computer />,
      title: "Speed Optimized",
      desc: "we dejoy working discrering client, people for whom quality, services, intefrity & aesthetics",
    },
    {
      id: 5,
      icon: <icons.Hub />,
      title: "Fully Customizable",
      desc: "we dejoy working discrering client, people for whom quality,services,intefrity& aesthetics",
    },
    {
      id: 6,
      icon: <icons.ThumbUp />,
      title: "Regular Updates",
      desc: "we dejoy working discrering client, people for whom quality,services,intefrity& aesthetics",
    },
  ];

  return (
    <>
      <div className="home bg-gray-900 text-white h-[350px] flex justify-center items-center">
        <div className="container text-center">
          {Landing.map((land) => {
            return (
              <>
                <div className="services" key={land.id}>
                  <h1 className="text-6xl font-bold mb-5 max-md:text-5xl">
                    {land.services}
                  </h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="services p-10">
        <div className="container">
          <div className="top text-center mb-10">
            <h4 className="text-lg text-orange-500 font-bold">Our Services</h4>
            <h1 className="text-4xl font-bold mb-2">What We Offer</h1>
            <p className="text-[#888] w-[40%] mx-auto max-md:w-full">
              there are many variatuons of passage of lorem available but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className="bottom grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
            {Services.map((ser) => {
              return (
                <>
                  <div className="box bg-white shadow-[rgba(0,0,0,0.24)_0px_3px_8px] p-5 rounded-lg">
                    <div className="icon text-orange-500 mb-2.5">{React.cloneElement(ser.icon, { style: { fontSize: "4rem" } })}</div>
                    <h2 className="text-lg font-semibold mb-2">{ser.title}</h2>
                    <p className="text-[#888] w-[80%] max-md:w-full">{ser.desc}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
