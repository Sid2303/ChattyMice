import React from 'react'
import './style.css'

const page = () => {
    return (
        <div className='flex min-h-lvh'>
            <div className="contacts flex flex-col justify-start min-h-lvh">
                <div className='icons bg-gray-400 flex justify-center items-center gap-4'>
                    <div className='flex justify-center items-center h-full w-full'>Icon 1</div>
                    <div className='trianle-div flex justify-center items-center absolute'>Icon 2</div>
                </div>
                <div className='profiles'>All Profile</div>
            </div>
            <div className="chat-section min-h-lvh flex flex-col justify-between items-center">
                <div className="chatter-info bg-purple-600 flex w-100">Information</div>
                <div className="chat-section">All Chats</div>
                <div className="enter-text flex bg-red-500">Enter</div>
            </div>
        </div>
    )
}

export default page