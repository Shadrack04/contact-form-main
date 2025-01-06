import { format } from "prettier";
import React from "react";

export default function Form({ onChange, onSubmit, error }) {
  return (
    <div className="">
      <form
        className=""
        action="#"
        onChange={(e) => onChange(e)}
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="gap-4 sm:flex">
          <div className="mb-1 flex w-full flex-col gap-1">
            <label htmlFor="firstName" className="text-l font-medium">
              First Name *
            </label>
            <div className="">
              <input
                value={FormData.firstName}
                style={error.firstName ? { border: "1px solid red" } : {}}
                name="firstName"
                id="firstName"
                type="text"
                className="inline-block w-full rounded-lg border-2 px-6 py-2 sm:py-1.5 focus:outline-none focus:ring focus:ring-[#0c7d68d0] hover:outline-none hover:ring hover:ring-[#0c7d68d0]"
              />
              {error.firstName && (
                <p className="text-red-700">{error.firstName}</p>
              )}
            </div>
          </div>

          <div className="mb-4 flex w-full flex-col gap-1">
            <label htmlFor="lastName" className="text-l font-medium">
              Last Name *
            </label>
            <div className="">
              <input
                value={FormData.lastName}
                style={error.lastName ? { border: "1px solid red" } : {}}
                name="lastName"
                id="lastName"
                type="text"
                className="inline-block w-full rounded-lg border-2 px-6 py-2 sm:py-1.5 focus:outline-none focus:ring focus:ring-[#0c7d68d0] hover:outline-none hover:ring hover:ring-[#0c7d68d0]"
              />
              {error.lastName && (
                <p className="text-red-700">{error.lastName}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mb-4 flex w-full flex-col gap-1">
          <label htmlFor="email" className="text-l font-medium">
            Email Address *
          </label>
          <div className="">
            <input
              value={FormData.email}
              style={error.email ? { border: "1px solid red" } : {}}
              name="email"
              id="email"
              type="text"
              className="inline-block w-full rounded-lg border-2 px-6 py-2 sm:py-1.5 focus:outline-none focus:ring focus:ring-[#0c7d68d0] hover:outline-none hover:ring hover:ring-[#0c7d68d0]"
            />
            {error.email && <p className="text-red-700">{error.email}</p>}
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-2">
          <p className="text-l font-medium">Query Type</p>
          <div className=" space-y-4 sm:flex sm:space-y-0 gap-4">
            <div className=" flex-auto">
              <label
                htmlFor="general"
                className="rounded-lg border border-[#0C7D68] px-6 py-4 sm:py-2 flex items-center has-[:checked]:bg-[#DFF0E7] gap-4"
              >
                <input
                  className="h-4 w-4 scale-150 accent-[#0C7D68]"
                  type="radio"
                  name="query"
                  id="general"
                  value="general"
                />
                General Enquiry
              </label>
            </div>

            <div className=" flex-auto">
              <label
                htmlFor="support"
                className="rounded-lg border border-[#0C7D68] px-6 py-4 sm:py-2 flex items-center gap-4 has-[:checked]:bg-[#DFF0E7]"
              >
                <input
                  className=" h-4 w-4 scale-150 accent-[#0C7D68]"
                  type="radio"
                  name="query"
                  id="support"
                  value="support"
                />
                Support Request
              </label>
            </div>
          </div>
        </div>

        <div className="mb-2 flex w-full flex-col gap-1">
          <label className=" text-l font-medium" htmlFor="message">
            Message *
          </label>
          <textarea
            style={error.message ? { border: "1px solid red" } : {}}
            id="message"
            name="message"
            className="inline-block w-full h-48 sm:h-20 resize-none rounded-lg border-2 px-6 py-2 focus:outline-none focus:ring focus:ring-[#0c7d68d0] hover:outline-none hover:ring hover:ring-[#0c7d68d0]"
          ></textarea>
        </div>

        <div className="gap-4 px-6 py-2">
          <label
            htmlFor="consent"
            className="flex items-center gap-4 text-stone-600 mb-1 "
          >
            <input
              className="h-4 w-4 scale-150 accent-[#0C7D68]"
              checked={FormData.consent}
              type="checkbox"
              name="consent"
              id="consent"
            />
            I consent to being contacted by the team *
          </label>
          {error.consent && <p className="text-red-700">{error.consent}</p>}
        </div>
        <div className="mt-1">
          <button className="w-full rounded-lg border-2 bg-[#0C7D68] px-8 py-2 text-white hover:bg-[#0c7d68d0] transition-colors duration-300 focus:outline-none focus:ring focus:ring-[#0c7d68d0] focus:bg-[#0c7d68d0]">
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
          name={id}
          id={id}
          type={type}
          className="inline-block w-full rounded-lg border-2 px-6 py-2 focus:outline-none focus:ring focus:ring-[#0c7d68d0]"
        />
        <p className="text-red-700">error message</p>
      </div>
    </div>
  );
}
