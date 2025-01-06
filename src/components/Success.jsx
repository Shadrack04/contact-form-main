import React from "react";
import successIcon from "../assets/images/icon-success-check.svg";

function Success() {
  return (
    <div className=" py-2 px-2 sm:px-4 bg-[#2A4245] absolute left-1/2 transform -translate-x-1/2 top-2 w-[80%] sm:w-[30%] h-16 rounded-lg">
      <div className=" flex gap-2">
        <img src={successIcon} alt="success icon" />
        <p className=" text-[#fff] text-xl font-normal">Message Sent!</p>
      </div>
      <p className=" text-[#fff] text-xs">
        Thanks for completing the form. We'll be in touch soon!
      </p>
    </div>
  );
}

export default Success;
