"use client";

import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";

const Sidebar = ({ userId }: { userId: string }) => {
  const [allFriends, setAllFriends] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<string | null>(null); // State for selected user

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const friends: any[] = [];
        const res = await fetch("http://localhost:3000/api/user/conversation");
        const data = await res.json();
        const result = data.result;

        result.forEach((element: { participants: any }) => {
          const participants = element.participants;
          for (let i = 0; i < participants.length; i++) {
            if (participants[i].pid === userId) {
              participants
                .filter((item: any) => item.pid !== userId)
                .forEach((friend: any) => friends.push(friend));
            }
          }
        });

        setAllFriends(friends);
      } catch (error) {
        console.log("SIDE BAR ERROR = ", error);
      }
    };

    fetchConversations();
  }, [userId]);

  useEffect(()=>{
    console.log(selectedUser)
  },[selectedUser])

  return (
    <SidebarProvider>
      <AppSidebar
        friends={allFriends}
        selectedUser={selectedUser}
        onUserSelect={setSelectedUser} // Pass the setter as a prop
      />
      <SidebarTrigger />
    </SidebarProvider>
  );
};

export default Sidebar;
