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
    <div id="home" className="home w-full h-fit">
      <div className="flex mt-35 h-fit  ml-70">
        <div className="w-90 mt-5">
          <h1 className="text-white text-4xl font-bold">Hello I'm</h1>
          <h1 className="text-white text-4xl font-bold">Shivam</h1>
          <h1 className="text-white text-4xl font-bold">and I'm a</h1>
          <h1 className=" text-4xl font-bold text-blue-400">
            {text[t].slice(0, c)}
          </h1>
        </div>

        <img
          src={profile}
          alt="profile"
          className="w-60 h-60 rounded-full"
        />
      </div>
    </div>
  );
}

export default Home;
