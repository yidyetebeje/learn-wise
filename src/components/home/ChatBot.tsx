"use client";
import React, { useState } from "react";
import Example from "./SideSlider";

export default function ChatBot() {
  const [type, setType] = useState("Quiz");
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <main className="flex flex-col gap-10">
      <div className="flex justify-around mt-12 gap-5 px-14">
        {/* chat history */}
        <div className="w-1/4 h-96  flex flex-col px-5 gap-5">
          <h1 className="text-center py-5 text-xl">Chat History</h1>
          <div className="bg-gray-300 w-full h-14 rounded-lg"></div>
          <div className="bg-gray-300 w-full h-14 rounded-lg"></div>
          <div className="bg-gray-300 w-full h-14 rounded-lg"></div>
        </div>
        {/*  */}
        <div className="w-3/4 flex flex-col gap-10 py-5 px-5 bg-gray-300 rounded-xl">
          {/* chat */}
          <div className="h-full flex flex-col gap-5">
            <div className=" flex w-1/2 bg-gray-400 rounded-tl-xl rounded-br-xl rounded-tr-xl px-3 py-2">
              <h1 className="">
                dit dolorum fugit. Debitis delectus consequuntur iure dolores
                odit pariatur eveniet, corrupti provident iste magnam ut
                consectetur accusamus esse vitae quia.
              </h1>
            </div>
            <div className=" w-1/2 bg-gray-400 h-32 rounded-tl-xl rounded-bl-xl rounded-tr-xl self-end"></div>
          </div>
          {/* chat */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-center gap-10">
              <button
                onClick={() => {
                  setType("Quiz");
                  setOpen(true);
                }}
                className="py-2 w-1/5 rounded-md bg-gray-400 flex gap-2 justify-center items-center"
              >
                <svg
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g fill="#494c4e" fill-rule="evenodd">
                      {" "}
                      <path d="M13 0H3a3.009 3.009 0 0 0-3 3v13.99a3.009 3.009 0 0 0 3 3h10a3.009 3.009 0 0 0 3-3V3a3.009 3.009 0 0 0-3-3zm1 16.99a1.016 1.016 0 0 1-1 1H3a1.016 1.016 0 0 1-1-1V3a1.016 1.016 0 0 1 1-1h10c.549.009.991.451 1 1v13.99z"></path>{" "}
                      <path d="M20 7v14a3.009 3.009 0 0 1-3 3H5a1 1 0 0 1 0-2h12a1.016 1.016 0 0 0 1-1V7a1 1 0 0 1 2 0z"></path>{" "}
                      <circle cx="8" cy="15" r="1"></circle>{" "}
                      <path d="M12 8a3.992 3.992 0 0 1-3 3.87V12a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1 2 2 0 1 0-2-2 1 1 0 1 1-2 0 4 4 0 1 1 8 0z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <span>Quizes</span>
              </button>
              <button
                onClick={() => {
                  setType("Key Points");
                  setOpen(true);
                }}
                className="py-2 w-1/5 rounded-md bg-gray-400 flex gap-2 justify-center items-center"
              >
                <svg
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M20.3142 3.68576L20.8446 3.15543L20.3142 3.68576ZM20.3142 11.8253L20.8446 12.3557L20.3142 11.8253ZM10.4547 10.057L9.92432 9.52663L9.92432 9.52663L10.4547 10.057ZM7.36124 13.1504L7.89157 13.6807H7.89157L7.36124 13.1504ZM10.8496 16.6388L10.3193 16.1084L10.3193 16.1084L10.8496 16.6388ZM13.9433 13.5451L13.4129 13.0148L13.9433 13.5451ZM7.00755 14.1587L6.26214 14.2415L6.26214 14.2415L7.00755 14.1587ZM7.20094 15.8992L6.45553 15.982L6.45553 15.982L7.20094 15.8992ZM8.10084 16.7991L8.01802 17.5445L8.01802 17.5445L8.10084 16.7991ZM9.84133 16.9924L9.92416 16.247H9.92416L9.84133 16.9924ZM7.43673 16.3898L7.96707 15.8594L7.96706 15.8594L7.43673 16.3898ZM7.61025 16.5633L7.07991 17.0936L7.07992 17.0936L7.61025 16.5633ZM10.6703 9.1926L9.94383 9.37914L9.94383 9.37914L10.6703 9.1926ZM14.8074 13.3297L14.6209 14.0562H14.6209L14.8074 13.3297ZM10.9532 13.6303C10.6587 13.339 10.1838 13.3416 9.89252 13.6361C9.60124 13.9306 9.60385 14.4055 9.89835 14.6967L10.9532 13.6303ZM15.5185 8.48151C15.1605 8.12353 15.1605 7.54313 15.5185 7.18515L14.4578 6.12449C13.5141 7.06826 13.5141 8.59841 14.4578 9.54217L15.5185 8.48151ZM16.8148 8.48151C16.4569 8.83949 15.8765 8.83949 15.5185 8.48151L14.4578 9.54217C15.4016 10.4859 16.9317 10.4859 17.8755 9.54217L16.8148 8.48151ZM16.8148 7.18515C17.1728 7.54313 17.1728 8.12353 16.8148 8.48151L17.8755 9.54217C18.8193 8.59841 18.8193 7.06826 17.8755 6.12449L16.8148 7.18515ZM17.8755 6.12449C16.9317 5.18072 15.4016 5.18072 14.4578 6.12449L15.5185 7.18515C15.8765 6.82717 16.4569 6.82717 16.8148 7.18515L17.8755 6.12449ZM19.7839 4.21609C21.7387 6.17088 21.7387 9.34021 19.7839 11.295L20.8446 12.3557C23.3851 9.81509 23.3851 5.696 20.8446 3.15543L19.7839 4.21609ZM20.8446 3.15543C18.304 0.614857 14.1849 0.614857 11.6443 3.15543L12.705 4.21609C14.6598 2.2613 17.8291 2.2613 19.7839 4.21609L20.8446 3.15543ZM9.92432 9.52663L6.83091 12.62L7.89157 13.6807L10.985 10.5873L9.92432 9.52663ZM11.38 17.1691L12.4136 16.1354L11.353 15.0748L10.3193 16.1084L11.38 17.1691ZM12.4136 16.1354L14.4736 14.0754L13.4129 13.0148L11.353 15.0748L12.4136 16.1354ZM6.26214 14.2415L6.45553 15.982L7.94635 15.8163L7.75296 14.0758L6.26214 14.2415ZM8.01802 17.5445L9.75851 17.7379L9.92416 16.247L8.18367 16.0536L8.01802 17.5445ZM6.9064 16.9201L7.07991 17.0936L8.14058 16.0329L7.96707 15.8594L6.9064 16.9201ZM8.18367 16.0536C8.16736 16.0518 8.15217 16.0445 8.14058 16.0329L7.07992 17.0936C7.33236 17.346 7.6632 17.505 8.01802 17.5445L8.18367 16.0536ZM6.45553 15.982C6.49495 16.3368 6.65396 16.6676 6.9064 16.9201L7.96706 15.8594C7.95547 15.8478 7.94816 15.8326 7.94635 15.8163L6.45553 15.982ZM10.3193 16.1084C10.2155 16.2122 10.0701 16.2633 9.92416 16.247L9.75851 17.7379C10.3573 17.8044 10.9539 17.5951 11.38 17.1691L10.3193 16.1084ZM6.83091 12.62C6.40488 13.0461 6.1956 13.6427 6.26214 14.2415L7.75296 14.0758C7.73675 13.9299 7.78775 13.7845 7.89157 13.6807L6.83091 12.62ZM11.3967 9.00605C10.9704 7.34603 11.4077 5.51341 12.705 4.21609L11.6443 3.15543C9.95676 4.84301 9.3911 7.22673 9.94383 9.37914L11.3967 9.00605ZM19.7839 11.295C18.4866 12.5923 16.654 13.0296 14.9939 12.6033L14.6209 14.0562C16.7733 14.6089 19.157 14.0432 20.8446 12.3557L19.7839 11.295ZM14.4736 14.0754C14.4807 14.0684 14.4935 14.0591 14.5182 14.0532C14.5444 14.047 14.5805 14.0458 14.6209 14.0562L14.9939 12.6033C14.4675 12.4681 13.8509 12.5768 13.4129 13.0148L14.4736 14.0754ZM10.985 10.5873C11.4227 10.1495 11.532 9.53285 11.3967 9.00605L9.94383 9.37914C9.95415 9.41931 9.95302 9.45541 9.94673 9.48175C9.94081 9.50657 9.93144 9.51951 9.92432 9.52663L10.985 10.5873ZM12.4107 15.0719L10.9532 13.6303L9.89835 14.6967L11.3559 16.1383L12.4107 15.0719Z"
                      fill="#000000"
                    ></path>{" "}
                    <path
                      d="M22 14.993C21.9361 17.787 21.6692 19.419 20.5542 20.5341C19.0882 22 16.7288 22 12.0101 22C7.29127 22 4.93188 22 3.46594 20.5341C2 19.0681 2 16.7087 2 11.9899C2 7.27117 2 4.91177 3.46594 3.44584C4.58099 2.33078 6.21298 2.06388 9.00704 2"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                  </g>
                </svg>
                <span>Key Points</span>
              </button>
              <button
                onClick={() => {
                  setType("Summary");
                  setOpen(true);
                }}
                className="py-2 w-1/5 rounded-md bg-gray-400 flex gap-2 justify-center items-center"
              >
                <svg
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M16 3.98999H8C6.93913 3.98999 5.92178 4.41135 5.17163 5.1615C4.42149 5.91164 4 6.92912 4 7.98999V17.99C4 19.0509 4.42149 20.0682 5.17163 20.8184C5.92178 21.5685 6.93913 21.99 8 21.99H16C17.0609 21.99 18.0783 21.5685 18.8284 20.8184C19.5786 20.0682 20 19.0509 20 17.99V7.98999C20 6.92912 19.5786 5.91164 18.8284 5.1615C18.0783 4.41135 17.0609 3.98999 16 3.98999Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M9 2V7"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M15 2V7"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M8 16H14"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M8 12H16"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <span>Summary</span>
              </button>
            </div>
            <div className="h-14 rounded-xl bg-gray-100"></div>
          </div>
        </div>
      </div>

      <Example title={type} setTitle={setType} open={open} setOpen={toggle} />
    </main>
  );
}
