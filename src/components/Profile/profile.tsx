"use client"

import "./profile.css";
import React, { useEffect, useState } from "react";

const Profile = ({ selectedUser }: { selectedUser: string | null }) =>{
  const [selectedFriend,setSelectedFriend] = useState("")

  useEffect(() => {
    fetch(`/api/user/${selectedUser}`)
      .then((res) => res.json())
      .then((data) => {
          console.log("Name:", data.resutlt.name);
          setSelectedFriend(data.resutlt.name)
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [selectedUser]);
  
  return (
    <div className="chatter-info bg-purple-600 flex w-full justify-center items-center p-4">
      <div className="flex flex-col">
        <h1 className="text-white">{selectedFriend}</h1>
      </div>
    </div>
  );
};

export default Profile;
