import React from "react";

const Banner = () => {
  return (
    <div className="flex items-end">
      {/* heading */}
      <div
        className="min-h-[621px] min-w-[835px] flex  items-center"
        style={{
          backgroundImage: `url("https://i.ibb.co/tqQQ6jP/banner-bg.webp")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-white w-1/2 pl-32">
          <h4 className="text-2xl">Welcome to Infenito</h4>
          <h1 className="text-[64px] font-bold">
            We power brand to build big!
          </h1>
          <button className="border-2 rounded-sm px-24 py-3">JOIN</button>
        </div>
      </div>

      {/*banner vector image  */}
      <img
        className="w-80"
        src="https://i.ibb.co/2M0s7Wd/working.webp"
        alt=""
      />
    </div>
  );
};

export default Banner;
