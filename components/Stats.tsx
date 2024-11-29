"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 6969,
    text: "Cups of coffee",
  },
  {
    num: 21234693,
    text: "Mouse clicks",
  },
  {
    num: 38634321,
    text: "Key presses",
  },
];

const Stats = () => {
  return (
    <section className="py-16">
      {" "}
      {/* Added padding for section spacing */}
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-12">
          {" "}
          {/* Column layout with gaps */}
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-4" // Added gap between number and text
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  className="text-6xl text-accent"
                />
                <span className="text-white text-xl">{stat.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
