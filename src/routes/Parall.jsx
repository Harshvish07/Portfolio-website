import React from "react";

const Parall = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Parallax Star Layers */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div
          className="absolute w-[200%] h-[200%] animate-slowSpin opacity-20"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/stardust.png')",
            backgroundRepeat: "repeat",
          }}
        />
        <div
          className="absolute w-[200%] h-[200%] animate-mediumSpin opacity-30"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/tiny-grid.png')",
            backgroundRepeat: "repeat",
          }}
        />
        <div
          className="absolute w-[200%] h-[200%] animate-fastSpin opacity-50"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Space Elements */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Astronaut-EVA.png"
        alt="Astronaut"
        className="absolute w-28 top-[20%] left-[10%] animate-float z-0"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Planet_-_The_Noun_Project.svg/1200px-Planet_-_The_Noun_Project.svg.png"
        alt="Planet"
        className="absolute w-40 bottom-[10%] right-[8%] animate-spin-slow opacity-80"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/26/Satellite_icon.svg"
        alt="Satellite"
        className="absolute w-20 top-[10%] right-[20%] animate-bounce z-0"
      />
      <div className="absolute top-[40%] left-[50%] w-1 h-1 bg-white rounded-full animate-shootingStar z-10" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-32 text-center bg-gradient-to-b from-black/80 to-[#0a0a1e]">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to My Space Portfolio
        </h1>
        <p className="text-lg max-w-xl">
          Explore my projects as you drift through the galaxy.
        </p>
      </div>
    </div>
  );
};

export default Parall;
