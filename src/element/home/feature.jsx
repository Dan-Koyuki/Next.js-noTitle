import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div className="relative h-[450px] w-full">
      <div className="absolute bottom-0 h-3/4 w-full bg-white z-0"></div>
      <div className="relative flex flex-row w-full px-32 mt-14 gap-10 z-10 text-black">
        <div className="rounded-lg bg-white w-1/3 h-[400px] shadow-xl">
          <div className="p-8 flex flex-col justify-center items-center">
            <Image
              className="w-16 mb-4"
              src={
                "https://res.cloudinary.com/dankoyuki/image/upload/v1715766208/KohoLink/cwiukmzhxpiweuw3htfm.png"
              }
              width={512}
              height={512}
              alt="logo"
            />
            <p className="text-xl font-medium text-center">
              Comprehensive Management Tools
            </p>
            {/* TODO: Add Description?? */}
            <p className="text-lg text-wrap text-center my-5">
              Stay connected to our village! Get instant alerts on community
              announcements, events, and important news delivered straight to
              your phone. Never miss a thing happening in our village.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-white w-1/3 h-[400px] shadow-xl">
          <div className="p-8 flex flex-col justify-center items-center">
            <Image
              className="w-16 mb-4"
              src={
                "https://res.cloudinary.com/dankoyuki/image/upload/v1715766207/KohoLink/wruzk1gmii2eedif8ihk.png"
              }
              width={512}
              height={512}
              alt="logo"
            />
            <p className="text-xl font-medium text-center">
              Monitor and Evaluate Village Projects
            </p>
            {/* TODO: Add Description?? */}
            <p className="text-lg text-wrap text-center my-5">
              Our online platform allows you to submit requests, access
              resources, and report issues quickly and easily. Experience
              hassle-free village management at your fingertips.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-white w-1/3 h-[400px] shadow-xl">
          <div className="p-8 flex flex-col justify-center items-center">
            <Image
              className="w-16 mb-4"
              src={
                "https://res.cloudinary.com/dankoyuki/image/upload/v1715766210/KohoLink/h974wtfpat7izd3rfxqu.png"
              }
              width={512}
              height={512}
              alt="logo"
            />
            <p className="text-xl font-medium text-center">
              Update and Maintain Village Information
            </p>
            {/* TODO: Add Description?? */}
            <p className="text-lg text-wrap text-center my-5">
              Work together to build a thriving village! Our platform fosters
              communication and collaboration among residents. Share ideas,
              participate in discussions, and contribute to a better village
              life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
