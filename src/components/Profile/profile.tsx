import "./profile.css";
import React from "react";

interface ProfileProps {
    userName: string;
    phone: number;
}

const Profile: React.FC<ProfileProps> = ({ userName, phone }) => {
    return (
        <div className="chatter-info bg-purple-600 flex w-full justify-center items-center p-4">
            <div className="flex flex-col">
                <h1 className="text-white">{userName}</h1>
                <p className="text-white">{phone}</p>
            </div>
        </div>
    );
};

export default Profile;
