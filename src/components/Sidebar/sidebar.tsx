import React from "react";
import "./sidebar.css";

const Sidebar = ({ userId }: { userId: string }) => {
  const allFriends: string[] = [];

  try {
    fetch("/api/user/conversation")
      .then((res) => res.json())
      .then((data) => {
        const participants = data.result[0].participants;

        // Finds the first other participant who isn't the current user
        const otherParticipant = participants.find(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (participant: any) => participant !== userId
        );

        // Adds other participant to allFriends if not already present
        if (otherParticipant && !allFriends.includes(otherParticipant)) {
          allFriends.push(otherParticipant);
        }

        console.log("All friends:", allFriends);
      });
  } catch (error) {
    console.log("SIDE BAR ERROR = ", error);
  }
  return (
    <div className="contacts flex flex-col justify-start min-h-lvh">
      <div className="icons flex flex-col">
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
      <div className="profiles">
        {allFriends.map((profile, index) => (
          <div
            key={index}
            className="profile flex flex-col text-white mb-2"
            // onClick={() => setSelectedProfile(profile)} // Handle onClick event
          >
            <p className="contact-icon">{profile[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
