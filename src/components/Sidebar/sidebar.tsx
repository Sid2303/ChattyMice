"use client";

import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Conversation, Participants } from "@/libs/models/conversationModel";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { Button } from "../ui/button";
import { AppSidebar } from "../app-sidebar";

const Sidebar = ({ userId }: { userId: string }) => {
  const [allFriends, setAllFriends] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state


  useEffect(() => {
    const fetchConversations = async () => {
      try {
        var friends: any[] = [];
        const uid = "67216a2f7ce05c0aca56905d";
        const res = await fetch("http://localhost:3000/api/user/conversation");
        const data = await res.json();
        const result = data.result;
        
        result.forEach((element: { participants: any; }) => {
          const participants = element.participants;
          
          // Corrected the loop condition to `i < participants.length`
          for (let i = 0; i < participants.length; i++) {
            if (participants[i].pid === uid) {
              // Add other participants (excluding the user) to the `friends` array
              friends.push(participants.filter((item: any) => item !== participants[i]));
            }
          }
        });
        
        setAllFriends(friends)
      } catch (error) {
        console.log("SIDE BAR ERROR = ", error);
      }
    };

    fetchConversations();
  }, [userId]);

  useEffect(() => {
    console.log("Updated friends list:", allFriends);
  }, [allFriends]); // Log when `allFriends` changes

  return (
    <SidebarProvider>
        <AppSidebar />
            <SidebarTrigger />
        </SidebarProvider>
  );
};

export default Sidebar;
