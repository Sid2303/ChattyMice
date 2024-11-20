import "./style.css";
import Sidebar from "@/components/Sidebar/sidebar";
import Profile from "@/components/Profile/profile";
import Chat from "@/components/Chat/chat";
import { loggedInUser } from "@/utils/getUser";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";

const Page = async () => {
  const user = await loggedInUser();
  console.log(user);
  let selectedUser = "";

  return (
    <div className="flex min-h-lvh overflow-hidden">
      <Sidebar userId={user.userId} />
      <div className="chat-section min-h-lvh flex flex-col justify-between items-center">
        <Profile selectedUser={selectedUser} />
        {/* <Chat profile={selectedProfile} /> */}
        <div className="enter-text flex items-center justify-center overflow-hidden">
          <div className="emoji-selection"></div>
          <form
            className="input-message ml-3 flex items-center text-black"
            action={async () => {
              "use server";
              return "";
            }}
          >
            <input
              className="w-20 z-10"
              type="text"
              placeholder="Enter Message: "
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
