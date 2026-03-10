import React, { useEffect, useState } from "react";
import profile from "../assets/profile.png";

function Home() {
  const text = [
    "Frontend Developer",
    "React Developer",
    "UI Enthusiast",
    "Engineering Student",
  ];

  const [t, setT] = useState(0);
  const [c, setC] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setC((prev) => (del ? prev - 1 : prev + 1));
    }, 120);

    return () => clearInterval(interval);
  }, [del]);

  useEffect(() => {
    if (c === text[t].length + 1) {
      setDel(true);
    }

    if (c === 0 && del) {
      setDel(false);
      setT((prev) => (prev + 1) % text.length);
    }
  }, [c, del, t]);

  return (
    <div id="home" className="home w-full min-h-screen pt-12 pb-10 px-4 md:px-0 flex items-center md:items-start">
      <div className="flex flex-col-reverse md:flex-row mt-10 md:mt-24 md:h-80 w-full max-w-6xl mx-auto md:ml-50 items-center md:items-start">
        <div className="w-full md:w-90 mt-5 text-center md:text-left">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Hello I'm</h1>
          <h1 className="text-white text-4xl md:text-6xl font-bold">Shivam</h1>
          <h1 className="text-white text-4xl md:text-6xl font-bold">and I'm a</h1>
          <h1 className="text-3xl md:text-6xl font-bold text-blue-400 mt-2 md:mt-0">
            {text[t].slice(0, c)}
          </h1>
        </div>

        <img
          src={profile}
          alt="profile"
          className="w-48 h-48 md:w-80 md:h-80 rounded-full mb-8 md:mb-0 md:ml-30 shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Home;
