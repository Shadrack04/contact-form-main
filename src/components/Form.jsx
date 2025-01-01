import React from "react";

export default function Form() {
  return (
    <div className="">
      <form className="" action="#">
        <div className="gap-4 sm:flex">
          <InputComponent id="firstName" inputName="First Name *" type="text" />

          <InputComponent id="lastName" inputName="Last Name *" type="text" />
        </div>

        <InputComponent id="email" inputName="Email Address *" type="email" />
        <div className="flex flex-col gap-4">
          <p>Query Type</p>
          <div className="">
            <label
              htmlFor="general"
              className="rounded-sm border border-[#0C7D68] px-6 py-4 flex items-center has-[:checked]:bg-[#DFF0E7] gap-4"
            >
              <input
                className="h-4 w-4 scale-150 accent-[#0C7D68]"
                type="radio"
                name="query"
                id="general"
              />
              General Enquiry
            </label>
          </div>
          <div className="">
            <label
              htmlFor="support"
              className="rounded-sm border border-[#0C7D68] px-6 py-4 flex items-center gap-4 has-[:checked]:bg-[#DFF0E7]"
            >
              <input
                className=" h-4 w-4 scale-150 accent-[#0C7D68]"
                type="radio"
                name="query"
                id="support"
              />
              Support Request
            </label>
          </div>
        </div>

        <div className="mb-4 flex w-full flex-col gap-3">
          <label className=" text-xl font-medium" for="message">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows="8"
            cols="40"
            className="inline-block w-full resize-none rounded-lg border-2 px-6 py-2 focus:outline-none focus:ring focus:ring-[#0c7d68d0]"
          ></textarea>
        </div>

        <div className="gap-4 px-6 py-2">
          <label
            htmlFor="consent"
            className="flex items-center gap-4 text-stone-600 "
          >
            <input
              className="h-4 w-4 scale-150 accent-[#0C7D68]"
              type="checkbox"
              name="consent"
              id="consent"
            />
            I consent to being contacted by the team *
          </label>
        </div>
        <div className="mt-4">
          <button className="w-full rounded-lg border-2 bg-[#0C7D68] px-8 py-4 text-white hover:bg-[#0c7d68d0] transition-colors duration-300 focus:outline-none focus:ring focus:ring-[#0c7d68d0] focus:bg-[#0c7d68d0]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function InputComponent({ id, inputName, type }) {
  return (
    <div className="mb-4 flex w-full flex-col gap-3">
      <label htmlFor={id} className="text-xl font-medium">
        {inputName}
      </label>
      <div className="">
        <input
          id={id}
          type={type}
          className="inline-block w-full rounded-lg border-2 px-6 py-2 focus:outline-none focus:ring focus:ring-[#0c7d68d0]"
        />
        <p className="text-red-700">error message</p>
      </div>
    </div>
  );
}
