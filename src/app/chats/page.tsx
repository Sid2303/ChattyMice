

import React, { useEffect, useState } from "react";
import "./style.css";
import selectEmoji from "@/resources/selectEmoji.svg";
import Sidebar from "@/components/Sidebar/sidebar";
import Profile from "@/components/Profile/profile";
import Chat from "@/components/Chat/chat";
import { loggedInUser } from "@/utils/getUser";

const Page =  async () => {

  const userId = await loggedInUser();

  
  // //Gets all the users that have had a conversation with user
  // useEffect(() => {
  //   // console.log(user)
  //   // getAllConversation(userId)
  //   // console.log(user?.userId)

  //   // fetch("/api/user")
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     console.log("UserId: ", data.user.userId);
  //   //   });

  // }, []);

  //Gets all message and logs it(needs to be completed to get messages from selected id)
 
    //fetching user id close


    // fetch("/api/user/conversation")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     data.result.forEach(
    //       (
    //         conversation: {
    //           _id: string;
    //           category: string;
    //           participants: string;
    //         },
    //         index: string
    //       ) => {}
    //     );

    //   })
    //   .catch((error) => {
    //     console.error("Error fetching messages:", error);
    //   });

  //   fetch("/api/user/conversation/messages")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       const messages = data.result[0];
  //       // console.log("Single message: ", messages.text);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching messages:", error);
  //     });
  //     data();
  //     console.log("User id: ",user.userId)
  // }, []);
  // console.log(user?.userId)

  //Getting a username from an id
  // useEffect(() => {
  //   fetch(`/api/user/${id}`)
  //     .then((res) => {
  //       return res.json;
  //     })
  //     .then((data) => {
  //       // console.log(data)
  //     });
  // }, []);

  return (
    <div className="flex min-h-lvh overflow-hidden">
      <Sidebar userId={userId.userId}/>
      <div className="chat-section min-h-lvh flex flex-col justify-between items-center">
        <Profile
          userName={selectedProfile.userName}
          phone={selectedProfile.phone}
        />
        <Chat profile={selectedProfile} />
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
