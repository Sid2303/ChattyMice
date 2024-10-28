export default function getAllConversation(userId: string){
    fetch('/api/user/conversation')
        .then((res) => res.json())
        .then((data) => {
        const allConversation: Array<string> = [];

        data.result.forEach((conversation: { participants: string; _id: string; }) => {
            const participants= conversation.participants;
            if(participants.includes(userId)){
            if(!allConversation.includes(conversation._id)){
                allConversation.push(conversation._id)
            }
        }
            console.log("All chats: ",allConversation)
        });
        })
        .catch((error) => {
        console.error('Error fetching messages:', error);
        });
}