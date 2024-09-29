"use client";

import React, { useState } from "react";
import "./style.css";
import selectEmoji from "@/resources/selectEmoji.svg";

console.log(selectEmoji);
const Page = () => {
  const profiles: {
    userName: string;
    phone: number;
    chat: { sender: "profile" | "user"; message: string }[];
  }[] = [
    {
      userName: "Sid",
      phone: 8279500601,
      chat: [
        { sender: "profile", message: "Hello from Sid!" },
        { sender: "user", message: "Hi Sid, how are you?" },
      ],
    },
    {
      userName: "Ranghar",
      phone: 8279500681,
      chat: [
        { sender: "profile", message: "Hello from Ranghar!" },
        { sender: "user", message: "Hey Ranghar, what’s up?" },
      ],
    },
  ];

  function sendMessage(event: React.FormEvent) {
    event.preventDefault();
    selectedProfile.chat.push({
      sender: "user",
      message: currentMessage,
    });
    setCurrentMessage("");
  }

  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(e.target.value);
    console.log(currentMessage);
  };

  return (
    <div className="flex min-h-lvh">
      <div className="contacts flex flex-col justify-start min-h-lvh">
        <div className="icons flex justify-center items-center gap-4">
          <div className="flex justify-center items-center h-full w-full">
            Icon 1
          </div>
          <div className="trianle-div flex justify-center items-center absolute">
            Icon 2
          </div>
        </div>
        <div className="profiles">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="profile flex flex-col text-white mb-2"
              onClick={() => setSelectedProfile(profiles[index])}
            >
              <p className="contact-icon">{Array.from(profile.userName)[0]}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="chat-section min-h-lvh flex flex-col justify-between items-center">
        <div className="chatter-info bg-purple-600 flex w-full justify-center items-center p-4">
          <div className="felx flex-col">
            <h1 className="text-white">{selectedProfile.userName}</h1>
            <p className="text-white">{selectedProfile.phone}</p>
          </div>
        </div>
        <div className="chat-section relative flex flex-col justify-end h-full min-h-[500px]">
          <div className="chat-messages flex flex-col w-full p-4 gap-2">
            <div className="chat-div">
              {selectedProfile.chat.map((chat, index) => (
                <div
                  key={index}
                  className={
                    chat.sender === "user"
                      ? "inner-chat-user"
                      : "inner-chat-profile"
                  }
                >
                  <div
                    className={
                      chat.sender === "user" ? "user-chat " : "profile-chat"
                    }
                  >
                    <p>{chat.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <form
          className="enter-text flex items-center justify-center"
          onSubmit={sendMessage}
        >
          <div className="emoji-selection"></div>
          <div className="input-message ml-3">
            <div className="input-message flex">
              <input
                className="w-full h-full pl-3"
                type="text"
                placeholder="Enter Message: "
                value={currentMessage} // Set the input value to the state
                onChange={handleInputChange} // Update state on input change
              />
            </div>
            <div className="send-button-div">
              <button className="btn-2">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
