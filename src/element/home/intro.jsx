import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-row items-center justify-between px-10 py-5 gap-5 text-white">
      <div className="border rounded-lg w-3/5 h-[400px] flex flex-col items-center pt-10">
        <p className="text-[50px] font-bold">Welcome to Admin Portal</p>
        <p className="text-[40px] font-bold">of</p>
        <p className="text-[60px] font-extrabold">Sunia Baru Village,</p>
        <p className="text-[40px] text-center">Managing Excellence Together</p>
      </div>
      <div className="border w-2/5 h-[500px] rounded-lg">
        {/* TODO: add some image of the actual village maybe */}
      </div>
    </div>
  );
};

export default Intro;
