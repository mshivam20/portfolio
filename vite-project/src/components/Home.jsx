import React from "react";

function Home(){
    const text=[
        "Frontend Developer",
        "React Developer",
        "UI Enthusiast",
        "Engineering Student"
    ]
    let t=0, c=0 , del=false;
    const el=document.getElementById("text");
    setInterval(()=>{del? c-- : c++
        el.textContent=text[t].slice(0,c);
        if(c===text[t].length+1) del=true;
        if(c===0 && del) {
            del=false;
            t=(t+1)%text.length;
        }
    },120);
    return(
        
       <div className="h-screen w-full">
          <h1 className="text-white text-4xl font-bold ">
            Hello I'am
          </h1>
          <h1 className="text-white text-4xl font-bold">Shivam</h1>
          <h1 className="text-white text-4xl font-bold">and I'am a </h1>
          <h1 className="text-white text-4xl font-bold"><span id="text"></span></h1>
       </div>
    )
}
export default Home;