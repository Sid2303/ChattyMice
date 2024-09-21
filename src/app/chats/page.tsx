"use client"

import React, { useState } from 'react'
import './style.css'

const page = () => {
    const profiles: {
        userName: string;
        phone: number;
        chat: { sender: 'profile' | 'user'; message: string }[];
    }[] = [
        {
            userName: "Sid",
            phone: 8279500601,
            chat: [
                { sender: 'profile', message: 'Hello from Sid!' },
                { sender: 'user', message: 'Hi Sid, how are you?' }
            ]
        },
        {
            userName: "Ranghar",
            phone: 8279500681,
            chat: [
                { sender: 'profile', message: 'Hello from Ranghar!' },
                { sender: 'user', message: 'Hey Ranghar, what’s up?' }
            ]
        }
    ];

    const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

    return (
        <div className='flex min-h-lvh'>
            <div className="contacts flex flex-col justify-start min-h-lvh">
                <div className='icons bg-gray-400 flex justify-center items-center gap-4'>
                    <div className='flex justify-center items-center h-full w-full'>Icon 1</div>
                    <div className='trianle-div flex justify-center items-center absolute'>Icon 2</div>
                </div>
                <div className='profiles'>
                    {profiles.map((profile,index)=>(
                        <div className="profile flex flex-col bg-black text-white mb-2" onClick={() => setSelectedProfile(profiles[index])}>
                            <p>{profile.userName}</p>
                            <p>{profile.phone}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="chat-section min-h-lvh flex flex-col justify-between items-center">
                <div className="chatter-info bg-purple-600 flex w-full justify-center items-center p-4">
                    <div className='felx flex-col'>
                        <h1 className="text-white">{selectedProfile.userName}</h1>
                        <p className="text-white">{selectedProfile.phone}</p>
                    </div>
                    
                </div>
                <div className="chat-section relative flex flex-col justify-end h-full min-h-[500px]">
                    <div className='userChat absolute bottom-0 right-0 bg-blue-500 p-2 m-4 rounded-lg'>
                        <p>I am user</p>
                    </div>
                    <div className='profileChat absolute bottom-0 left-0 bg-gray-300 p-2 m-4 rounded-lg'>
                        <p>I am Profile</p>
                    </div>
                </div>
                <div className="enter-text flex bg-red-500">Enter</div>
            </div>
        </div>
    )
}

export default page