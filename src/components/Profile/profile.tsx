import "./profile.css";
import React from "react";

const Profile = ({ user }: { user: string }) => {
  return (
    <div className="chatter-info bg-purple-600 flex w-full justify-center items-center p-4">
      <div className="flex flex-col">
        <h1 className="text-white">{user ? user : "GUEST"}</h1>
      </div>
    </div>
  );
};

export default Profile;
