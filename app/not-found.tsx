import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="container h-screen flex items-center justify-center ">
      <div className="h-4/5 flex flex-col lg:flex-row gap-y-8 items-center w-full dark:text-white text-black">
        <div className="xl:w-1/2 w-full flex flex-col gap-y-5 lg:order-none order-2">
          <h1 className="h2">Page Not Found</h1>
          <p>
            Sorry, the page you are looking for could not be found
          </p>
        </div>
        <div className="xl:w-1/2 w-full relative lg:order-none order-1 flex justify-center">
          <img src="/assets/404.png" alt="404 error" className="max-[460px]:w-[300px] max-[320px]:w-200px h-auto" />
          <div className="absolute xl:top-[50px] xl:left-[32px] lg:top-[29px] lg:left-[6px] md:top-[77px] md:left-[70px] sm:top-[51px] sm:left-[43px] vs:top-[25px] vs:left-[-6px] min-[400px]:left-[34px] min-[380px]:left-[20px] left-[-8px] top-[18px]">
            <Button className="vs:flex hidden">
              <Link href="/" >Back to home</Link>
            </Button>
            <button className="vs:hidden flex outline outline-accent px-2 py-1 rounded-lg">
              <Link href="/" className="text-xs">Back to home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notFound;
