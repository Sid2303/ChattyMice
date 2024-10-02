// components/Sidebar.tsx
import React from 'react';
import "./sidebar.css"

interface SidebarProps {
    profiles: {
        userName: string;
        phone: number;
        chat: { sender: 'profile' | 'user'; message: string }[];
    }[];
    setSelectedProfile: (profile: {
        userName: string;
        phone: number;
        chat: { sender: 'profile' | 'user'; message: string }[];
    }) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ profiles, setSelectedProfile }) => {
    return (
        <div className="contacts flex flex-col justify-start min-h-lvh">
            <div className='icons flex justify-center items-center gap-4'>
                <div className='flex justify-center items-center h-full w-full'>Icon 1</div>
                <div className='trianle-div flex justify-center items-center absolute'>Icon 2</div>
            </div>
            <div className='profiles'>
                {profiles.map((profile, index) => (
                    <div
                        key={index}
                        className="profile flex flex-col text-white mb-2"
                        onClick={() => setSelectedProfile(profile)} // Handle onClick event
                    >
                        <p className='contact-icon'>{Array.from(profile.userName)[0]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;