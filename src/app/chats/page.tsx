"use client";

import React, { useEffect, useState } from "react";
import "./style.css";
import selectEmoji from "@/resources/selectEmoji.svg";
import Sidebar from "@/components/Sidebar/sidebat";
import Profile from "@/components/Profile/profile";
import Chat from "@/components/Chat/chat";
import { loggedInUser } from "@/utils/getUser";
import getAllConversation from "@/utils/getAllConversations";

const Page = () => {

  // const userId = loggedInUser()
  // console.log("UID: ",userId)

  const [currentConversationId, setCurrentConversationId] = useState<string>(""); // set the current selected conversation
  const allFriends: string[] = [];
  const id: string= allFriends[0];
  const allConversation: Array<String> = [];

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
    if(currentMessage){
      selectedProfile.chat.push({
        sender: "user",
        message: currentMessage,
      });
      setCurrentMessage("");
    }
    else{
      console.log("Please send message")
    }
  }


  //Gets all the users that have had a conversation with user
  useEffect(() => {
    // getAllConversation(userId)
    // console.log(userId)

    fetch("/api/user")
      .then((res)=>res.json())
      .then((data)=>{
        console.log("UserId: ",data.user.userId)
      })
    
    // fetch('/api/user/conversation')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const participants = data.result[0].participants;
        
    //     // Finds the first other participant who isn't the current user
    //     const otherParticipant = participants.find((participant:any) => participant !== userId);

    //     // Adds other participant to allFriends if not already present
    //     if (otherParticipant && !allFriends.includes(otherParticipant)) {
    //       allFriends.push(otherParticipant);
    //     }
        
    //     console.log("All friends:", allFriends);
    //   })
  }
    ,[])


  //Gets all message and logs it(needs to be completed to get messages from selected id)
  useEffect(() => {
    fetch('/api/user/conversation')
      .then((res) => res.json())
      .then((data) => {
        data.result.forEach((conversation: { _id: string; category: string; participants: string; }, index: string) => {
        });
  
        // Optionally, if you need to set the first conversation's ID
        if (data.result.length > 0) {
          const firstConversationId = data.result[0]._id;
          console.log("First conversation ID:", firstConversationId);
          // setCurrentConversationId(firstConversationId);
        }
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      });
  

    fetch('/api/user/conversation/messages')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const messages = data.result[0];
        console.log("Single message: ",messages.text)
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      });
  }, []);

  //Getting a username from an id
  useEffect(()=>{
        fetch(`/api/user/${id}`)
        .then((res)=>{
          return res.json;
        })
        .then((data)=>{
          // console.log(data)
        })
  },[])

  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(e.target.value);
    console.log(currentMessage);
  };

  return (
    <div className="flex min-h-lvh overflow-hidden">
      <Sidebar profiles={profiles} setSelectedProfile={setSelectedProfile} />
      <div className="chat-section min-h-lvh flex flex-col justify-between items-center">
        <Profile
          userName={selectedProfile.userName}
          phone={selectedProfile.phone}
        />
        <Chat profile={selectedProfile}/>
        <div className="enter-text flex items-center justify-center overflow-hidden">
          <div className="emoji-selection"></div>
          <form
            className="input-message ml-3 flex items-center"
            onSubmit={sendMessage}
          >
            <input
              className=""
              type="text"
              placeholder="Enter Message: "
              value={currentMessage}
              onChange={handleInputChange}
              />
            <div className="send-button-div">
              <button className="btn-2" type="submit">
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
        </form>
      </div>
      </div>
    </div>
  );
};

export default Page;
