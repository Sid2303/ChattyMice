import React from 'react'
import "./chat.css"

interface ChatMessage {
    sender: 'profile' | 'user';
    message: string;
}

interface ChatProps {
    profile: {
        userName: string;
        phone: number;
        chat: ChatMessage[];
    };
}

const Chat: React.FC<ChatProps> = ({ profile }) => {
    return (
        <div className="chat-section relative flex flex-col justify-end h-full min-h-[500px]">
            <div className="chat-messages flex flex-col w-full p-4 gap-2">
                <div className="chat-div">
                    {profile.chat.map((chat, index) => (
                        <div
                            key={index}
                            className={
                                chat.sender === 'user'
                                    ? 'inner-chat-user'
                                    : 'inner-chat-profile'
                            }>
                            <div
                                className={
                                    chat.sender === 'user'
                                        ? 'user-chat'
                                        : 'profile-chat'
                                }>
                                <p>{chat.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Chat