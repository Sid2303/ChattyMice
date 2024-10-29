import "./profile.css";
import React from "react";

interface User {
    userName: string;
    id: string;
}

interface ProfileProps {
    user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
    return (
        <div className="chatter-info bg-purple-600 flex w-full justify-center items-center p-4">
            <div className="flex flex-col">
                <h1 className="text-white">{user.userName}</h1>
            </div>
        </div>
    );
};


export default Profile;
