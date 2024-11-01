"use client";
import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Conversation, Participants } from "@/libs/models/conversationModel";

const Sidebar = ({ userId }: { userId: string }) => {
  const [allFriends, setAllFriends] = useState<string[]>([]);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/user/conversation");
        const data = await res.json();

        const participants = data.result.map(
          (p: Conversation) => p.participants
        );

        // Using flatMap to flatten and map to get only names of participants
        const friends = participants.flatMap(
          (p: Participants[]) =>
            p
              .filter((user: Participants) => user.pid + "" !== userId) // Filter out the current user
              .map((user: Participants) => user.name) // Map to get only the names
        );

        setAllFriends(friends);
      } catch (error) {
        console.log("SIDE BAR ERROR = ", error);
      }
    };

    fetchConversations();
  }, [userId]);

  return (
    <div className="contacts flex flex-col justify-start min-h-lvh">
      <div className="icons flex flex-col">
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
      <div className="profiles">
        {allFriends.map((name) => (
          <div
            key={name}
            className="profile flex flex-col text-white mb-2"
            // onClick={() => setSelectedProfile(profile)} // Handle onClick event
          >
            <p className="contact-icon">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
