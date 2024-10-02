"use client";

import React, { useState } from "react";
import "./style.css";
import selectEmoji from "@/resources/selectEmoji.svg";
import Sidebar from '@/components/Sidebar/sidebat';
import Profile from '@/components/Profile/profile';
import Chat from '@/components/Chat/chat';

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
        <div className='flex min-h-lvh'>
            <Sidebar profiles={profiles} setSelectedProfile={setSelectedProfile}/>
            <div className="chat-section min-h-lvh flex flex-col justify-between items-center">
                <Profile userName={selectedProfile.userName} phone={selectedProfile.phone} />
                <Chat profile={selectedProfile} />
                <div className="enter-text flex items-center justify-center">
                    <div className='emoji-selection'></div>
                    <div className='input-message ml-3'>
                        <div className="input-message flex">
                            <input 
                                className="w-full h-full pl-3" 
                                type="text" 
                                placeholder="Enter Message: "
                                value={currentMessage} // Set the input value to the state
                                onChange={handleInputChange} // Update state on input change
                            />
                        </div>
                        <div className='send-button-div'>
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
