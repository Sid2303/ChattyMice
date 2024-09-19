import React from 'react'
import './style.css'

const page = () => {
    return (
        <div className='flex min-h-lvh'>
            <div className="contacts flex flex-col justify-start min-h-lvh">
            <div className='icons bg-gray-400 w-38 flex justify-center items-center gap-4'>
                    <div className='flex justify-center items-center h-full w-35'>Icon 1</div>
                    <div className='trianle-div flex justify-center items-center ml-8'>Icon 2
                    </div>
                </div>
                <div className='profiles'>All Profile</div>
            </div>
            <div className="chat-section min-h-lvh flex flex-col justify-between items-center">
                <div className="chatter-info">Information</div>
                <div className="chat-section">All Chats</div>
                <div className="enter-text">Enter</div>
            </div>
        </div>
    )
}

export default page